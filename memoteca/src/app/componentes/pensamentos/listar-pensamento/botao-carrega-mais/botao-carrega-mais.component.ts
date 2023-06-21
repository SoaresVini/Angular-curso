import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carrega-mais',
  templateUrl: './botao-carrega-mais.component.html',
  styleUrls: ['./botao-carrega-mais.component.css']
})
export class BotaoCarregaMaisComponent{

  @Input() haMaispensamentos: boolean = false


  constructor(){ }


}
