import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-screen',
  templateUrl: './formulario-screen.component.html',
  styleUrls: ['./formulario-screen.component.scss'],
})
export class FormularioScreenComponent implements OnInit {
  region:any;
  estadoclima:any;
  dia:any;
  temperatura:any;
  grados:any;
  formulario:FormGroup;
  activarMsg:Boolean=false;
  hidden:boolean=true;


  constructor(public form:FormBuilder) {
    this.formulario= this.form.group({
      region:["",[Validators.required]],
      estadoclima:["",[Validators.required]],
      dia:["",[Validators.required]],
      temperatura:[Validators.required],
      grados:["",[Validators.required]]
    });

    function mostrar(){
      (<HTMLInputElement> document.getElementById("formulariocambio")).hidden = false;
    }
   }

   

   ngOnInit(): void {
  }


}
  
