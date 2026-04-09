import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';

  onRegister() {
    const userData = {
      Username: this.name,
      Email: this.email,
      PasswordHash: this.password
    };

    this.http.post('http://localhost:5154/api/auth/register', userData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error(err)
    });
  }
}
