import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
  // Podría darse el caso de que el archivo HTML
  // tenga muy pocas líneas y se ponga aquí en
  // una variable 'template'
})
export class ContadorComponent {
  public title: string = 'bases';
  public contador: number = 0;
  public limite: boolean = false;

  cambiar_dato(signo: string, cantidad: number)
  {
    if (signo === '-') {
      if (this.contador === 0) {
        this.limite = true;
      }
      else {
        this.contador -= cantidad;
      }
    }

    else if (signo === '+') {
      this.contador += cantidad;
      if (this.limite === true) {
        this.limite = false;
      }
    }
  }

  reestablecer()
  {
    this.contador = 0;
    this.limite = false;
  }
}
