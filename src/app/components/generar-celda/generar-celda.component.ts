import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoVehiculoService } from 'src/app/services/tipoVehiculo/tipo-vehiculo.service';
import { CeldaService } from 'src/app/services/celda/celda.service';
import { EstadoCeldaService } from 'src/app/services/estadoCelda/estado-celda.service';
import { ParqueaderoService } from 'src/app/services/parqueadero/parqueadero.service';

@Component({
  selector: 'app-generar-celda',
  templateUrl: './generar-celda.component.html',
  styleUrls: ['./generar-celda.component.css'],
})
export class GenerarCeldaComponent implements OnInit {
  celdaForm: FormGroup;
  parqueadero: any;
  tipoVehiculo: any;
  celda: any;
  estadoCelda: any;

  constructor(
    public fb: FormBuilder,
    public parqueaderoService: ParqueaderoService,
    public tipoVehiculoService: TipoVehiculoService,
    public celdaService: CeldaService,
    public estadoCeldaService: EstadoCeldaService
  ) {
    this.celdaForm = this.fb.group({
      nombre: ['', Validators.required],
      parqueadero: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      estadoCelda: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.parqueaderoService.getAllParqueaderos().subscribe(
      (resp) => {
        this.parqueadero = resp.datos;
      },
      (error) => {
        console.error(error);
      }
    );
    this.tipoVehiculoService.getAllTiposVehiculo().subscribe(
      (resp) => {
        this.tipoVehiculo = resp.datos;
      },
      (error) => {
        console.error(error);
      }
    );
    this.estadoCeldaService.getAllEstadoCeldas().subscribe(
      (resp) => {
        this.estadoCelda = resp.datos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  generarCelda(): void {
    this.celdaService.saveCelda(this.celdaForm.value).subscribe(
      (resp) => {
        alert(resp.mensajes[0]);
        this.celdaForm.reset();
        console.log(resp);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}
