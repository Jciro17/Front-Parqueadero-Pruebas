import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarVehiculoComponent } from 'src/app/components/registrar-vehiculo/registrar-vehiculo.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { GenerarCeldaComponent } from './components/generar-celda/generar-celda.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarVehiculoComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    GenerarCeldaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
