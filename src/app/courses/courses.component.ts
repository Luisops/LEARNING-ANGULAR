import { Component, OnInit ,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit , AfterViewInit {

  titulo: string = "LISTA DE CURSOS !!";
   anchoImagen: string = '40px';
  @ViewChild('filtro',{static: false})
   filtro: ElementRef;
   textoFiltro: string = '';
  
   cursos: any[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'August 10, 2019',
      description: 'Lleva JavaScript al siguiente nivel con tipado',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/TypeScript.png'
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'August 10, 2019',
      description: 'Lleva JavaScript al siguiente nivel con tipado',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/3Angular.png'
    }
  ]

  constructor(private router:Router) { 

   //this.eliminarCursos();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.filtro.nativeElement.value = 'Angular';
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
