import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FirstPageSecoundChildComponent } from './first-page/first-page-secound-child/first-page-secound-child.component';
import { FirstPageFirstChildComponent } from './first-page/first-page-first-child/first-page-first-child.component';
import { SecoundPageComponent } from './secound-page/secound-page.component';
import { SecoundPageFirstChildComponent } from './secound-page/secound-page-first-child/secound-page-first-child.component';
import { SecoundPageSecoundChildComponent } from './secound-page/secound-page-secound-child/secound-page-secound-child.component';
import { AuthInterceptor } from './authenticate/interceptor/auth.interceptor';
import { AuthModule } from './authenticate/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    FirstPageSecoundChildComponent,
    FirstPageFirstChildComponent,
    SecoundPageComponent,
    SecoundPageFirstChildComponent,
    SecoundPageSecoundChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
