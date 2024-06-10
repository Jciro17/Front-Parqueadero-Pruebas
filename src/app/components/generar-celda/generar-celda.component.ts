import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoVehiculoService } from 'src/app/services/tipoVehiculo/tipo-vehiculo.service';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';

@Component({
  selector: 'app-generar-celda',
  templateUrl: './generar-celda.component.html',
  styleUrls: ['./generar-celda.component.css'],
})
export class GenerarCeldaComponent implements OnInit {
  celdaForm: FormGroup;
  tipoVehiculo: any;

  constructor(
    public fb: FormBuilder,
    public tipoVehiculoService: TipoVehiculoService,
    public vehiculoService: VehiculoService
  ) {
    this.celdaForm = this.fb.group({
      nombre: ['', Validators.required],
      parqueadero: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      estadoCelda: ['', Validators.required],
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

  generarCelda(): void {
    console.log(this.celdaForm.value); // Lógica para generar celda
  }
}
