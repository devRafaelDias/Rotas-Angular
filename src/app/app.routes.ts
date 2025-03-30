import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

import { SecondComponent } from './second/second.component';

import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  // Caso a rota não seja especificada
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  // Caso a rota especificada não seja encontrada
  { path: '**', component: NotfoundpageComponent },
];
