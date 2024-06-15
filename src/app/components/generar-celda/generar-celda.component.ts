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
  estadoCelda: any;
  isSubmitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    public parqueaderoService: ParqueaderoService,
    public tipoVehiculoService: TipoVehiculoService,
    public celdaService: CeldaService,
    public estadoCeldaService: EstadoCeldaService
  ) {
    this.celdaForm = this.fb.group({
      nombre: ['', Validators.required],
      parqueadero: [null, Validators.required],
      tipoVehiculo: [null, Validators.required],
      estadoCelda: [null, Validators.required],
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
    this.isSubmitted = true;
    if (this.celdaForm.valid) {
      this.celdaService.saveCelda(this.celdaForm.value).subscribe(
        (resp) => {
          alert(resp.mensajes[0]);
          this.celdaForm.reset();
          this.isSubmitted = false;
        },
        (error) => {
          console.error(error);
          alert(error.error.mensajes[0]);
        }
      );
    } else {
      this.logFormErrors();
    }
  }

  private logFormErrors(): void {
    const controls = this.celdaForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        const controlErrors = controls[name].errors;
        for (const key in controlErrors) {
          console.error(`Error in field ${name}: ${key}`);
        }
      }
    }
  }
}
