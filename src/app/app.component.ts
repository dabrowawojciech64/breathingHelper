import { Component } from '@angular/core';
import { BreathParameters } from './breather/breath-parameters.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'breathingHelper';

  public selectedBreath?: BreathParameters;

  public selectBreath(event: BreathParameters) {
    console.log(event);
    this.selectedBreath = event;
  }
}
