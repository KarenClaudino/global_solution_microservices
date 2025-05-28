import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  titulo = 'Global Solution';
  descricao = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento = '26 de maio';

  destaques = ['Inovação', 'Tecnologia', 'Impacto Social'];
  

  mostrarDestaques = true;
}
