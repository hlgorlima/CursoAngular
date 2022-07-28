import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Higor';
  userData = {
    email: 'higor@lindo.net',
    idade: 24,
    sexo: 'indefinido',
    etnia: 'Africano'
  }
  title = 'curso-angular';
}
