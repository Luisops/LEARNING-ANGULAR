import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'ed-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
   title = 'hello';
   constructor(){
     console.log('Componente construido');
     
   }
};
