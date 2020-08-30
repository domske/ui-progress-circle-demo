import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-progress-circle-two',
  templateUrl: 'progress-circle-two.component.html',
  styleUrls: ['progress-circle-two.component.scss'],
})
export class ProgressCircleTwoComponent implements OnInit, OnDestroy {
  progress = 0;
  timerId = 0;
  hasError = false;
  errorValue = 100;

  ngOnInit() {
    this.ngOnDestroy();
    this.progress = 0;
    this.hasError = false;
    this.errorValue = Math.random() * 200;
    this.timerId = window.setInterval(() => {
      this.progress += Math.random() * 12;
      if (this.progress > this.errorValue) {
        this.hasError = true;
        window.clearInterval(this.timerId);
      }
      if (this.progress > 100) {
        this.progress = 100;
        window.clearInterval(this.timerId);
      }
    }, Math.random() * 200 + 200);
  }

  ngOnDestroy() {
    window.clearInterval(this.timerId);
  }

  getColor() {
    return this.hasError
      ? 'danger'
      : this.progress < 100
      ? 'info'
      : 'success';
  }
}
