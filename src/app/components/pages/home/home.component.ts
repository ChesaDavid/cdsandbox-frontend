import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
  // We need RouterModule for [routerLink]
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authService = inject(AuthService);
  projectName = 'cdsandbox //';
  itecPillar = 'iTEC 2026 // Real-time AI Coding Sandbox';
  isLoggedInVariable = this.authService.isLoggedIn;
  getWhereToEnter(){
    return this.authService.isLoggedIn() ? "/dashboard" : "/login";
  }
  linkToEnter = this.getWhereToEnter();
}


