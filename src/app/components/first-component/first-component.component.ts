import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Higor';
  age: number = 24;
  job = 'Programador';
  hobbies = ["Correr", "dar a bunda", "teste"]
  car = {
    name: "Golf",
    estilo: "Sapão"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
