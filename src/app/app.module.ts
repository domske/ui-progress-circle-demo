import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressCircleOneComponent } from './progress-circle-one/progress-circle-one.component';
import { ProgressCircleTwoComponent } from './progress-circle-two/progress-circle-two.component';
import { ProgressCircleThreeComponent } from './progress-circle-three/progress-circle-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressCircleOneComponent,
    ProgressCircleTwoComponent,
    ProgressCircleThreeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
