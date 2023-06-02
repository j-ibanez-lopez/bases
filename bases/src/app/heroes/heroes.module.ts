import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesV1Component } from './heroes-v1/heroes-v1.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    HeroesV1Component,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesV1Component,
    ListaComponent
  ]
})
export class HeroesModule { }
