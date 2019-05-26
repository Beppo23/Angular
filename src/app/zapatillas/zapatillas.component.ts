import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.titulo = 'Componente de zapatillas';
    this.zapatillas = [
      new Zapatilla('Reebok', 80, 'Reebok', 'negro', true),
      new Zapatilla('Reebok1', 80, 'Reebok', 'blanco', true),
      new Zapatilla('Reebok2', 80, 'Reebok', 'rojo', true),
      new Zapatilla('Reebok3', 80, 'Reebok', 'verde', false)
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);
  }

}
