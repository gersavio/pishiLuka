import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CaraPage } from './cara.page';
import { CaraPageRoutingModule } from './cara-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaraPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CaraPage]
})
export class CaraPageModule {}
