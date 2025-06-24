import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../models/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  imports: [NgIf,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    });
  }


  userSignUp() {
    if (this.userForm.valid) {
      this.authService.UserSignUp(this.userForm.value).subscribe(res => {
        if (res.status == 201) {
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
