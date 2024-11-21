import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { festivos } from '../../core/entidades/Festivos';
import { ReferenciasMaterialModule } from '../../modulos/referencias-material.module';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public festivos: festivos[] = [];

  public columnas = [
    { name: "ID", prop: "id" },
    { name: "Nombre", prop: "nombre" },
    { name: "Tipo", prop: "idTipo" },
  ];
  
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  
  constructor(private festivoServicio: ApiService) { }

  ngOnInit(): void {
    this.listar();
  }
  public escoger(event: any) {

  }
  public listar() {
    this.festivoServicio.listar().subscribe({
      next: respuesta => {
        this.festivos = respuesta;
        console.log('Datos recibidos:', respuesta);
      },
      error: error => {
        window.alert(error);
      }
    });
  }
}
