import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SimonPageRoutingModule } from './simon-routing.module';
import { SimonPage } from './simon.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimonPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SimonPage]
})
export class SimonPageModule {}
