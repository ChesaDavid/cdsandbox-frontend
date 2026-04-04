import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import {LoginComponent} from "./components/pages/login/login.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {RegisterComponent} from "./components/pages/register/register.component";
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '' }
];
