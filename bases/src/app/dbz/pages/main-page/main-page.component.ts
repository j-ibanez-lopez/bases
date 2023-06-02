import { Component } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personajes: Character[] = [{
    nombre: 'Krilin',
    poder: 500
  },
  {
    nombre: 'Goku',
    poder: 9500
  },
  {
    nombre: 'Vegeta',
    poder: 8000
  },
  {
    nombre: 'Bulma',
    poder: 100
  },
  {
    nombre: 'Maestro Rochi',
    poder: 7000
  }
  ]

  public onNuevoPersonaje(personaje: Character): void
  {
    console.log(personaje);
  }
}
