import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

import { SecondComponent } from './second/second.component';

import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: '**', component: NotfoundpageComponent },
];
