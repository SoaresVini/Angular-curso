import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = []

  constructor( private service: PensamentoService){}

  // parte do siclo de vida componte, sempre que quiser que uma logica seja executada assim que o componente seja executado

  //listar retorna um Observable

  // o observable vai enterder que é para passar uma notificação sempre que houver uma mudança

  // lista do componnete vai recer a lista que esta vindo da API

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }

}
