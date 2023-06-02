import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  public pacientes!: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {

    this.pacienteService.listarPacientes()

      .subscribe(pacientesRecebidos => {

        this.pacientes = pacientesRecebidos
        console.log(this.pacientes)
      },
        erro => console.log(erro)
      )

  }

}