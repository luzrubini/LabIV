import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1';
  edad1 : number
  edad2 : number;
  suma : number;
  promedio : number;
  constructor(){
    this.edad1 = 0
    this.edad2 = 0
    this.suma = 0
    this.promedio =0
  }
  limpiar(form: NgForm)
  {
    form.resetForm()
  }
  sumar()
  {
    this.suma = this.edad1 + this.edad2;
    this.promedio = this.suma/2;
  }
  
}
