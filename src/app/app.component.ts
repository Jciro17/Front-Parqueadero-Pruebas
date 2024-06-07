import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from './services/vehiculo/vehiculo.service';
import { TipoVehiculoService } from './services/tipoVehiculo/tipo-vehiculo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  vehiculoForm: FormGroup;
  tipoVehiculo: any;
  vehiculo: any[] = [];

  constructor(
    public fb: FormBuilder,
    public tipoVehiculoService: TipoVehiculoService,
    public vehiculoService: VehiculoService
  ) {
    this.vehiculoForm = this.fb.group({
      matricula: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.tipoVehiculoService.getAllTiposVehiculo().subscribe(
      (resp) => {
        this.tipoVehiculo = resp.datos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  registrarVehiculo(): void {
    this.vehiculoService.saveVehiculo(this.vehiculoForm.value).subscribe(
      (resp) => {
        alert(resp.mensajes[0]);
        this.vehiculoForm.reset();
        this.vehiculo.push(resp);
        console.log(resp);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}
