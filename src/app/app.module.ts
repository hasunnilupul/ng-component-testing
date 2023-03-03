import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { HomeComponent } from './home/home.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent,
    HomeComponent,
    DashboardHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
