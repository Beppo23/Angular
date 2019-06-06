import { Injectable } from '@angular/core';
import { Zapatilla } from 'src/app/module/zapatilla';

@Injectable()
export class ZapatillasService {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebok', 80),
            new Zapatilla('Nike', 120),
            new Zapatilla('Nike palahuert', 40),
            new Zapatilla('Nike', 120)
        ];
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}
