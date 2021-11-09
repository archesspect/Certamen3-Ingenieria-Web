import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderScreenComponent } from './componentes/header-screen/header-screen.component';
import { InicioScreenComponent } from './componentes/inicio-screen/inicio-screen.component';
import { NavbarScreenComponent } from './componentes/navbar-screen/navbar-screen.component';
import { FormularioScreenComponent } from './componentes/formulario-screen/formulario-screen.component';
import { MetropolitanaScreenComponent } from './metropolitana-screen/metropolitana-screen.component';
import { BiobioScreenComponent } from './componentes/biobio-screen/biobio-screen.component';
import { AraucaniaScreenComponent } from './componentes/araucania-screen/araucania-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderScreenComponent,
    InicioScreenComponent,
    NavbarScreenComponent,
    FormularioScreenComponent,
    MetropolitanaScreenComponent,
    BiobioScreenComponent,
    AraucaniaScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
