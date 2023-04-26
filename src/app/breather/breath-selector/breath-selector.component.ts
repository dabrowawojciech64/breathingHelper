import { BreathParameters } from './../breath-parameters.type';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { breathOptions } from './breath-options';

@Component({
  selector: 'app-breath-selector',
  templateUrl: './breath-selector.component.html',
  styleUrls: ['./breath-selector.component.scss'],
})
export class BreathSelectorComponent {
  @Output() selectedBreath = new EventEmitter<BreathParameters>();
  public breathSelectorForm = new FormGroup({
    inhaleTime: new FormControl(null, Validators.required),
    inhaleHoldTime: new FormControl(null),
    exhaleTime: new FormControl(null, Validators.required),
    exhaleHoldTime: new FormControl(null),
  });
  public selected: boolean = false;
  public options = breathOptions;

  public onBlur(event: any) {
    if (!event.target.value) {
      event.target.value = null;
    } else if (event.target.value < 0) {
      event.target.value = Math.abs(event.target.value);
    }
  }
  public onSubmit() {
    const selectedBreath = this.breathSelectorForm
      .value as unknown as BreathParameters;
    this.selectedBreath.emit(selectedBreath);
    this.selected = true;
  }

  public onSelect(event: any) {
    event.inhaleHoldTime = event.inhaleHoldTime ? event.inhaleHoldTime : null;
    event.exhaleHoldTime = event.exhaleHoldTime ? event.exhaleHoldTime : null;
    this.breathSelectorForm.setValue(event);
  }
}
