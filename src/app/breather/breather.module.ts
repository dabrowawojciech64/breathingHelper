import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreatherComponent } from './breather/breather.component';



@NgModule({
  declarations: [
    BreatherComponent
  ],
  exports: [
    BreatherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BreatherModule { }
