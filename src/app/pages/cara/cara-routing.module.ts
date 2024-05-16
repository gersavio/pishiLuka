import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaraPage } from './cara.page';

const routes: Routes = [
  {
    path: '',
    component: CaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaraPageRoutingModule {}
