import { Component } from '@angular/core';

@Component({
  selector: 'app-inspiracao',
  standalone: true,
  imports: [],
  templateUrl: './inspiracao.component.html',
  styleUrl: './inspiracao.component.css'
})
export class InspiracaoComponent {

  titulo = 'Nossa Inspiração';
  descricao = 'Conheça as ideias e valores que inspiram o Global Solution.';
}
