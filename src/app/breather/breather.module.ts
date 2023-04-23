import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreatherComponent } from './breather/breather.component';
import { BreathSelectorComponent } from './breath-selector/breath-selector.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BreatherComponent, BreathSelectorComponent],
  exports: [BreatherComponent, BreathSelectorComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class BreatherModule {}
