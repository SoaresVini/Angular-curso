import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit{

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService,
  private router: Router,
    //Classe que forneça informações sobre as rotas que vão vir dos cards de pensamento
  private route: ActivatedRoute){}

  ngOnInit(): void {
    //Captura instantanea da rota o momneto que foi acessada

    //  paraMap - um mapa dos parametros obrigatorios e opcionais

    const id = this.route.snapshot.paramMap.get('id')

    this.service.buscarPensamento(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

    excluirPensamento(){
      if(this.pensamento.id){
        this.service.excluir(Number(this.pensamento.id)).subscribe(()=> {
          this.router.navigate(['/listarPensamento'])
        })
      }
    }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
