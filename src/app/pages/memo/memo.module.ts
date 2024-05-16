import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { MemoPageRoutingModule } from './memo-routing.module';
import { MemoPage } from './memo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MemoPage]
})
export class MemoPageModule {}
