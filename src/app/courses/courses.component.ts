import { Component, OnInit ,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Curso } from '../curso';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit , AfterViewInit {
//Contraseña: eybooks.to
  titulo: string = "LISTA DE CURSOS !!";
   anchoImagen: string = '40px';
  @ViewChild('filtro',{static: false})
   filtro: ElementRef;
   private _textoFiltro: string = '';
  
  //cambie el estado de este atributo
   set textoFiltro(t: string){
    console.log('textoFiltro',t);
    this._textoFiltro = t;
    //filtrar los cursos
    this.cursos =  t? this.filtrarCursos(t): this.service.getCourses();
  }

  //nos va a permitir a l leer el texto filtro
  
   get textoFiltro(){
     return this._textoFiltro;
  }

   cursos: Curso[];

  constructor(private router:Router, private service: CoursesService) { 
    
   //this.eliminarCursos();
  }

  ngOnInit(): void {
    this.cursos = this.service.getCourses();
    setTimeout(()=>{
      this.textoFiltro = 'Angular'
    },1000)
  }

  ngAfterViewInit(){
    this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto:String){
   return this.cursos.filter((curso:Curso)=> curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0)
  }

  eliminarCursos(){
    setTimeout(() => {
      this.cursos = [];
    }, 5000);
  }
  onEditCurso(curso:Curso){
     console.log('[Courses] Edit',curso);
     //Redirección: course/{curso.id}
     this.router.navigate([`course/${curso.id}`]);
  }
  deleteCurso(curso:Curso){
    console.log('[Courses] Delete',curso);
    this.cursos = this.cursos.filter((c: Curso)=>{
      return c.id !== curso.id
    });
  }
}
