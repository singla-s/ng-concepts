import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppEventManagerService, AppStateService } from './services';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    RemoveUserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AppEventManagerService, AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
