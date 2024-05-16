import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'colores', loadChildren: () => import('./pages/colores/colores.module').then(m => m.ColoresPageModule) },
  { path: 'cara', loadChildren: () => import('./pages/cara/cara.module').then(m => m.CaraPageModule) },
  { path: 'numeros', loadChildren: () => import('./pages/numeros/numeros.module').then(m => m.NumerosPageModule) },
  { path: 'primos', loadChildren: () => import('./pages/primos/primos.module').then(m => m.PrimosPageModule) },
  { path: 'memo', loadChildren: () => import('./pages/memo/memo.module').then(m => m.MemoPageModule) },
  { path: 'simon', loadChildren: () => import('./pages/simon/simon.module').then(m => m.SimonPageModule) },
  { path: '', redirectTo: 'colores', pathMatch: 'full' },
  {path: '**', redirectTo: 'colores'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
