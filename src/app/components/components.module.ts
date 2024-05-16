import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent,
  ],
  // entryComponents: [
  //   MenuComponent,
  // ],
  // providers: [
  // ],
})
export class ComponentsModule { }
