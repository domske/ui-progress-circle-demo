import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle-four',
  templateUrl: 'progress-circle-four.component.html',
  styleUrls: ['progress-circle-four.component.scss'],
})
export class ProgressCircleFourComponent {
  @Input() value = 0;

  getColor() {
    return this.value > 80 ? 'danger' : this.value > 60 ? 'warning' : 'success';
  }
}
