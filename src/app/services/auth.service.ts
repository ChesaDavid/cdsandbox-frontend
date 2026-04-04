import {Injectable,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5154/api/auth';
  login(credentials:any){
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((user:any)=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    )
  }
}
