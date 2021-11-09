import { Component, OnInit } from '@angular/core';
import { Listaclimasmetropolitana } from '../interfaces/categoria';

@Component({
  selector: 'app-metropolitana-screen',
  templateUrl: './metropolitana-screen.component.html',
  styleUrls: ['./metropolitana-screen.component.scss']
})
export class MetropolitanaScreenComponent implements OnInit {

  public Listaclimas=Listaclimasmetropolitana;
  public climas:any;

  constructor() { }

  ngOnInit(): void {
  }

}
