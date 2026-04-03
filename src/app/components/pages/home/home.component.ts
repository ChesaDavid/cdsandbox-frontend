import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    { name: 'Ecommerce API Gateway', icon: '🚀', updated: '2m ago', status: 'Running' },
    { name: 'Python Data Scraper', icon: '🐍', updated: '1h ago', status: 'Idle' },
    { name: 'React UI Portfolio', icon: '⚛️', updated: '2d ago', status: 'Pending Config' },
    { name: 'Golang Microservice', icon: '🐹', updated: '3d ago', status: 'Stopped' },
  ];
}
