import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-breath-selector',
  templateUrl: './breath-selector.component.html',
  styleUrls: ['./breath-selector.component.scss'],
})
export class BreathSelectorComponent {
  breathSelectorForm = new FormGroup({
    inhaleTime: new FormControl(null, Validators.required),
    inhaleHoldTime: new FormControl(null),
    exhaleTime: new FormControl(null, Validators.required),
    exhaleHoldTime: new FormControl(null),
  });

  public onSubmit() {
    console.warn(this.breathSelectorForm.value);
  }
}
