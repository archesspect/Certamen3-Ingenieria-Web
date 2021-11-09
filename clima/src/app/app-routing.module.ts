import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioScreenComponent } from './componentes/inicio-screen/inicio-screen.component';
import { MetropolitanaScreenComponent } from './metropolitana-screen/metropolitana-screen.component';
import { BiobioScreenComponent } from './componentes/biobio-screen/biobio-screen.component';
import { AraucaniaScreenComponent } from './componentes/araucania-screen/araucania-screen.component';

const routes: Routes = [
  {path:"",component:InicioScreenComponent},
  {path:"metropolitana",component:MetropolitanaScreenComponent},
  {path:"biobio",component:BiobioScreenComponent},
  {path:"araucania",component:AraucaniaScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
