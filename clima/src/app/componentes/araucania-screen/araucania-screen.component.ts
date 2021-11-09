import { Component, OnInit } from '@angular/core';
import { Listaclimasaraucania } from '../../interfaces/araucania';

@Component({
  selector: 'app-araucania-screen',
  templateUrl: './araucania-screen.component.html',
  styleUrls: ['./araucania-screen.component.scss']
})
export class AraucaniaScreenComponent implements OnInit {

  public Listaclimas=Listaclimasaraucania;
  public climasaraucania:any;

  constructor() { }

  ngOnInit(): void {
  }

}
