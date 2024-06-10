import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { TipoVehiculoService } from 'src/app/services/tipoVehiculo/tipo-vehiculo.service';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css'],
})
export class RegistrarVehiculoComponent implements OnInit {
  vehiculoForm: FormGroup;
  tipoVehiculo: any;

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
        console.log(resp);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}
