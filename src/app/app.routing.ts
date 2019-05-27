import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes

import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

//Array de rutas

const appRoutes: Routes = [
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuegos', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: ZapatillasComponent}
];

//Exportar el modulo del routing

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
