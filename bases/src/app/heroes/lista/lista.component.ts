import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listado: string[] = ['Spiderman', 'Superman', 'Batman', 'Flash']
  borrado?: string = ''

  agregar()
  {
    this.listado.push();
  }

  quitar()
  {
    if(this.listado) {
      this.borrado = this.listado.pop();
    }
  }

  reset()
  {
    this.listado = ['Spiderman', 'Superman', 'Batman', 'Flash']
    this.borrado = ''
  }
}
