import { Routes } from '@angular/router';
import { ScreenTwoComponent } from './componentes/screen-two/screen-two.component';
import { ScreenOneComponent } from './componentes/screen-one/screen-one.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ScreenTwoComponent,
    data: { animation: 'openClosePage' }

  },
  {
    path: "screen-two",
    pathMatch: "full",
    component: ScreenTwoComponent,
    data: { animation: 'openClosePage' }
  },
];

/*
 {
    path: 'sobre/fotos-clinica',
    loadChildren: () => import('./module/about-clinic-routing.module').then(m => m.AboutClinicRoutingModule)
  },
*/
