import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;
  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>() ;
  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();


  constructor() { }

  ngOnInit(): void {
  }
  editarCurso(curso:Curso){
    console.log('Edit, ',curso);
    this.edit.emit(curso);
  };
  
  eliminarCurso(curso:Curso){
    console.log('Eliminar, ',curso);
    this.delete.emit(curso);
  };
  
  onMouseover(event:any){
    console.log('Mouse over',event);
  };
  
  onDoubleClick(event:any){
    console.log('Double Click',event);
  }
}
