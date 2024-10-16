import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ColoresPageRoutingModule } from './colores-routing.module';
import { ColoresPage } from './colores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColoresPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ColoresPage]
})
export class ColoresPageModule {}
