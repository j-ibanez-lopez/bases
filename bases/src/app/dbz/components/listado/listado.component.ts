import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input('personajes')
  public characterList: Character[] = [{
    nombre: 'Trunks',
    poder: 1000
  }]
}
