import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginData!: FormGroup;
  isPassShowing = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginData = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  validateAccount() {
    const email = this.loginData.controls['email'].value;
    const password = this.loginData.controls['password'].value;
    if (email === 'joe@gmail.com' && password === 'password') {
      this.router.navigate(['/home']);
      this.isSubmitted = true;
      //If you are an employeer looking at this, I know. This is for practice
    } else {
      alert('The password username pair is invalid');
    }
  }

  showPass(passDiv: HTMLInputElement, visImg: HTMLButtonElement) {
    console.log('here');
    if (this.isPassShowing) {
      passDiv.type = 'password';
      visImg.style.backgroundImage = "url('../../assets/show pass.png')";
    } else {
      passDiv.type = 'text';
      visImg.style.backgroundImage = "url('../../assets/hide pass.png')";
    }
    this.isPassShowing = !this.isPassShowing;
  }
}
