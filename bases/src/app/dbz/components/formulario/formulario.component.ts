import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent
{
  public personaje: Character = {
    nombre: '',
    poder: 0

  }

  @Output('')
  public onNuevoPersonaje: EventEmitter<Character> = new EventEmitter<Character>();

  agregarPersonaje()
  {
    console.log(this.personaje)
    if (this.personaje.nombre.length === 0 || this.personaje.poder < 0 )
    {return;}
    console.log(this.personaje)
    this.onNuevoPersonaje.emit(this.personaje);

    this.personaje.nombre = '';
    this.personaje.poder = 0;
  }
}
