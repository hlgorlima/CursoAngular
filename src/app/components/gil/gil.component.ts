import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gil',
  templateUrl: './gil.component.html',
  styleUrls: ['./gil.component.css']
})
export class GilComponent implements OnInit {

  mensagem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick( nome : string, saudacao: string) : void {
    this.mensagem = `${saudacao}!! ${nome}!`;
  }

}
