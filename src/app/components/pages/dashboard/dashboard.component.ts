import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"; // 1. Import this

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  projects = [
    // { name: 'Ecommerce API Gateway', icon: '🚀', updated: '2m ago', status: 'Running' },
    // { name: 'Python Data Scraper', icon: '🐍', updated: '1h ago', status: 'Idle' },
    // { name: 'React UI Portfolio', icon: '⚛️', updated: '2d ago', status: 'Pending Config' },
    // { name: 'Golang Microservice', icon: '🐹', updated: '3d ago', status: 'Stopped' },
  ];
}
