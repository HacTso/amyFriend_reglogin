import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FriendService } from './friend.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    NewComponent,
    ShowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [FriendService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
