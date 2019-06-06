import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'calculadora'})
export class CalculadoraPipe implements PipeTransform {
    //value | calculadora: args
    transform(value: any, ...args: any[]) {
        let operaciones = `
            Suma: ${value + args[0]} 
            Resta: ${value - args[0]}
            Multiplicacion: ${value * args[0]}
            Division: ${value / args[0]}
        `;

        return operaciones;
        throw new Error("Method not implemented.");
    }

}