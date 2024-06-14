import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showLoginForm = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  showLogin() {
    this.showLoginForm = true;
  }

  autenticarLogin(): void {
    this.usuarioService.autenticarUsuario(this.loginForm.value).subscribe(
      (resp) => {
        alert(resp.mensajes[0]);
        this.loginForm.reset();
        this.router.navigate(['inicio']);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}
