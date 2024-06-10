import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarVehiculoComponent } from 'src/app/components/registrar-vehiculo/registrar-vehiculo.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GenerarCeldaComponent } from 'src/app/components/generar-celda/generar-celda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'registrar-vehiculo',
    component: RegistrarVehiculoComponent,
  },

  { path: 'generar-celda', component: GenerarCeldaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
