import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { User } from '../../models/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  failed: boolean = false;
  returnUrl: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.userForm = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }



  ngOnInit(): void {
    let i = 0;
    throw new Error('error');
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || '';
  }

  userLogin() {
    if (this.userForm.valid) {
      this.authService.ValidateUser(this.userForm.value).subscribe(res => {
        if (res.body != null) {
          const user: User = res.body;
          if (user != null && user != undefined) {
            this.authService.SetAuthUser(user);

            if (this.returnUrl != '') {
              this.router.navigateByUrl(this.returnUrl);
            }
            else if (user.roles.indexOf('Admin') >= 0) {
              this.router.navigate(['/admin']);
            }
            else if (user.roles.indexOf('User') >= 0) {
              this.router.navigate(['/user']);
            }
          }
        }
      });
    }
  }
}
