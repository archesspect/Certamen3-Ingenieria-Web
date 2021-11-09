import { Component, OnInit } from '@angular/core';
import { Listaclimasbiobio, climasbiobio } from '../../interfaces/biobio';

@Component({
  selector: 'app-biobio-screen',
  templateUrl: './biobio-screen.component.html',
  styleUrls: ['./biobio-screen.component.scss']
})
export class BiobioScreenComponent implements OnInit {

  public Listaclimas=Listaclimasbiobio;
  public climasbiobio:any;

  constructor() { }

  ngOnInit(): void {
  }

}
