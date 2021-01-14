import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titulo: string = "LISTA DE CURSOS !!";
  anchoImagen: string = '40px';
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

  constructor() { }

  ngOnInit(): void {
  }

editarCurso(curso:any){
  console.log('Edit, ',curso);
};

eliminarCurso(curso:any){
  console.log('Eliminar, ',curso);
};

onMouseover(event:any){
  console.log('Mouse over',event);
};

onDoubleClick(event:any){
  console.log('Double Click',event);
}
}
