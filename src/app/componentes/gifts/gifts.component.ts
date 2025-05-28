import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {

  titulo = 'Gifts e Brindes';
  descricao = 'Conheça os brindes exclusivos do Global Solution.';
}
