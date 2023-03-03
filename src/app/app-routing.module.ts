import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { HomeComponent } from './home/home.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'light-switch', component: LightSwitchComponent},
  {path: 'event-listen', component: DashboardHeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
