import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NewsPageComponent } from './page/news-page/news-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomManagementComponent,
    BookingPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
