import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
  mensaje: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  hicisteClick():void{
    this.mensaje = "Hola, que bueno verte!";
  }

}
