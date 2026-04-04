import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // We need RouterModule for [routerLink]
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projectName = 'cdsandbox //';
  itecPillar = 'iTEC 2026 // Real-time AI Coding Sandbox';
}
