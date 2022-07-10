import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  mensajeInput_1: string = "";
  mensajeInput_2: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onKey( event:any ):void{
    this.mensajeInput_1 = `Texto 1: ${event.target.value}`;
  }

  onKeyBoard( event:KeyboardEvent ):void{
    this.mensajeInput_2 = `Texto 2: ${(<HTMLInputElement>event.target).value}`;
  }

}
