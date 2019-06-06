import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../module/zapatilla';
import { ZapatillasService } from '../services/zapatilla.service';


@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public miMarca: string;
    public color: string;
    constructor(
        public _zapatillaService: ZapatillasService
    ) {
        this.color = 'yellow';
        this.marcas = new Array();
        this.titulo = 'Componente de zapatillas';
    }

    ngOnInit(): void {
        console.log(this.marcas);
        this.zapatillas = this._zapatillaService.getZapatillas();
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