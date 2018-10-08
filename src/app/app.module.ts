import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    PostsService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
