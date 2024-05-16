import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimosPage } from './primos.page';

const routes: Routes = [
  {
    path: '',
    component: PrimosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimosPageRoutingModule {}
