import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'progress-circle-demo';
  gaugeValue = 33;

  ngOnInit() {
    const light = window.localStorage.getItem('light');
    if (light && light === 'true') {
      document.body.classList.add('light');
    }
  }

  toggleLightMode() {
    document.body.classList.toggle('light');
    window.localStorage.setItem(
      'light',
      `${document.body.classList.contains('light')}`
    );
  }
}
