import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle-three',
  templateUrl: 'progress-circle-three.component.html',
  styleUrls: ['progress-circle-three.component.scss'],
})
export class ProgressCircleThreeComponent {
  @Input() value = 0;
  @Input() color = 'info';
}
