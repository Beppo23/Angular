import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-videojuego-selector', //nombre que va a tener la etiqueta del componente para llamarlo
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

        constructor(){
            this.titulo = "Componente de videojuegos";
            this.listado = "Listado de los juegos mas populares";
            console.log("Se ha cargado el componente videojuego.component.ts")
        }

        ngOnInit(){
            console.log("OnInit ejecutado");
        }
        ngDoCheck(){
            console.log("DoCheck ejecutado");
        }
        ngOnDestroy(){
            console.log("On Destroy ejecutado");
        }

        cambiarTitulo(){
            this.titulo = "He cambiado el titulo"; 
        }
}