import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showLoginForm = false;
  showRegisterForm = false;

  constructor(private router: Router) {}

  showLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  showRegister() {
    this.showRegisterForm = true;
    this.showLoginForm = false;
  }

  ingresar() {
    this.router.navigate(['inicio']);
  }

  registrarse() {
    this.showLoginForm = false;
    this.showRegisterForm = false;
  }
}
