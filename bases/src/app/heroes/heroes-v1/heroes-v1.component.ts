import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe-v1',
  templateUrl: './heroes-v1.component.html',
  styleUrls: ['./heroes-v1.component.css']
})
export class HeroesV1Component
{
  nombre: string = 'Peter Parker';
  edad: number = 21;

  cambiarNombre()
  {
    this.nombre = 'Clark Kent'
  }

  cambiarEdad()
  {
    this.edad = 12
  }

  capitalizar()
  {
    this.nombre = this.nombre.toLowerCase();
    const editado = this.nombre.replace(this.nombre[0], this.nombre[0].toUpperCase())

    return editado;
  }

  concatenarInformacion(): string
  {
    return this.nombre + ' tiene ' + this.edad;
  }

  resetear(): void
  {
    this.nombre = 'Peter Parker';
    this.edad = 21
  }
}
