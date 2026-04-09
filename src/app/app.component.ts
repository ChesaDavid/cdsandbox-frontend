import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/layout/navbar/navbar.component";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authServiec = inject(AuthService);
  title = 'cdsandbox-frontend';
  isUserLoggedIn =  this.authServiec.isLoggedIn();

}
