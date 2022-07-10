import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './Components/click-me/click-me.component';
import { KeyupComponent } from './Components/keyup/keyup.component';
import { TablaAlumnosComponent } from './Components/tabla-alumnos/tabla-alumnos.component';
import { DetalleAlumnoComponent } from './Components/detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    TablaAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
