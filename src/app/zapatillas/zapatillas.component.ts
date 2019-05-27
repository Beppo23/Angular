import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../module/zapatilla';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public miMarca: string;
    public color: string;
    constructor() {
        this.color = 'yellow';
        this.marcas = new Array();
        this.titulo = "Componente de zapatillas";
        this.zapatillas = [
            new Zapatilla('Reebok', 80),
            new Zapatilla('Nike', 120),
            new Zapatilla('Nike palahuert', 40),
            new Zapatilla('Nike', 120)
        ];
    }

    ngOnInit(): void {
        console.log(this.marcas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.nombre) < 0) {
            this.marcas.push(zapatilla.nombre);
            }
        });
        console.log(this.marcas);
    }

    addMarca() {
        let zapa = new Zapatilla(this.miMarca, 90);
        this.zapatillas.push(zapa);
    }
}