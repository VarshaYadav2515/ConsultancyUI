import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-header',
  imports:[RouterLink],
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  user: User | any;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

  logOut() {
    this.authService.RemoveAuthUser();
    this.user = this.authService.user;
    return this.router.navigate(['/login']);
  }
}
