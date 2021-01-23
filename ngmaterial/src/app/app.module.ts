import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppEventManagerService, AppStateService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppEventManagerService, AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
