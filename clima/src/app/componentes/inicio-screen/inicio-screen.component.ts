import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { climas, Listaclimas } from '../../interfaces/semanas';
import { FormularioScreenComponent } from '../formulario-screen/formulario-screen.component';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.scss']
})
export class InicioScreenComponent implements OnInit {

  public Listaclimas=Listaclimas;
  public climas:any;
  public formulario:any;


  constructor() { 

    function mostrar(){
      (<HTMLInputElement> document.getElementById("formulariocambio")).hidden = false;
    }
    function transformar(temp:number):number{
      return (temp*1.8)+32;
    }
  }

  ngOnInit(): void {
  }

  

  

}
