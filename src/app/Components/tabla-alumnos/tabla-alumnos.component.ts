import { Component, OnInit } from '@angular/core';

import { Alumno } from '../entities/alumno';

const ALUMNOS = [
  new Alumno( 1,'José','Perez',19,true, '../../assets/images/foto1.jpg' ),
  new Alumno( 2,'Martín','Rodriguez',20,false, '../../assets/images/foto2.jpg' ),
  new Alumno( 3,'Daniel','Mirra',18,false, '../../assets/images/foto3.jpg' ),
  new Alumno( 4,'Raúl','Dax',21,true, '../../assets/images/foto4.jpg' ),
  new Alumno( 5,'Gabriel','Redante',20,false, '../../assets/images/foto5.jpg' )
]

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = ALUMNOS;
  mostrar: boolean = false;
  alumnoSeleccionado: any;
  btnOk = "btn btn-success";
  btnNo = "btn btn-danger";

  constructor() { }

  ngOnInit(): void {
  }

  verDetalle() {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  verAlumno( alumno:Alumno ):void{
    this.alumnoSeleccionado = alumno;
    this.mostrar = true;
  }

}
