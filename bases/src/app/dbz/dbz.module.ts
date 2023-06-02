import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    FormularioComponent // AddCharacterComponent en el video
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
