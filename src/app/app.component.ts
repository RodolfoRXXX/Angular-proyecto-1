import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-1';
  titulo : string;
  fecha : Date;
  numero : number;
  decimal : number;
  costo : number;
  urlGoogle : string;
  rojo : string;

  constructor(){
    this.titulo = "hola de nuevo(por constructor)";
    this.fecha = new Date();
    this.numero = 10;
    this.decimal = 0.5;
    this.costo = 3500;
    this.urlGoogle = "https://www.google.com";
    this.rojo = "red";
  }
  clickBoton(){
    alert("Hola mundo");
  }
}
