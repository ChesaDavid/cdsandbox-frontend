import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../../../services/auth.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';
  private http: any;

  onLogin(event:Event){
    event.preventDefault();
    this.isLoading = true;

    this.authService.login({email:this.email,password:this.password}).subscribe({
      next:()=>this.router.navigate(['/dashboard']),
      error:(err)=>{
        this.errorMessage = err.message;
        this.isLoading = false;
      }
    })
  }
  // onLogin() {
  //   this.http.post('http://localhost:5154/api/auth/login', {
  //     email: this.email,
  //     password: this.password
  //   }).subscribe({
  //     next: (user: any) => {
  //       this.authService.setSession(user); // Save the user!
  //       this.router.navigate(['/dashboard']); // Go to dashboard
  //     },
  //     error: () => this.errorMessage = "Invalid credentials"
  //   });
  // }

}
