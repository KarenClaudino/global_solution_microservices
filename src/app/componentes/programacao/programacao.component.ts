import { Component } from '@angular/core';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { HoverBorderDirective } from '../directives/hover-border.directive';
import { Evento } from '../interfaces/evento.interface';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [EventoCardComponent, HoverBorderDirective],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.css'
})
export class ProgramacaoComponent {

  titulo = 'Programação do Evento';
  

  eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Kick-off',
      data: '26 de maio',
      horario: '19H00',
      local: 'ONLINE'
    },
    {
      id: 2,
      titulo: 'Workshop de Inovação',
      data: '27 de maio',
      horario: '14H00',
      local: 'Auditório Principal'
    },
    {
      id: 3,
      titulo: 'Painel de Tecnologia',
      data: '28 de maio',
      horario: '10H00',
      local: 'Sala Digital'
    }
  ];
  

  mensagemInscricao: string | null = null;
  

  participar(nomeEvento: string): void {
    this.mensagemInscricao = `Você se inscreveu no evento: ${nomeEvento}`;
  }
}
