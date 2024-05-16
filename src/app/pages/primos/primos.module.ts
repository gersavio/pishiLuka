import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimosPageRoutingModule } from './primos-routing.module';

import { PrimosPage } from './primos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PrimosPage]
})
export class PrimosPageModule {}
