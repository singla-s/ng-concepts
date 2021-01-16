import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { HistogramColoredTailComponent } from './histogram-colored-tail/histogram-colored-tail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HistogramColoredTailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
