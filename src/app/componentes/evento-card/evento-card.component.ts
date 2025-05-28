import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HoverBorderDirective } from '../directives/hover-border.directive';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [HoverBorderDirective],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.css'
})
export class EventoCardComponent {

  @Input() titulo: string = '';
  @Input() data: string = '';
  @Input() horario: string = '';
  @Input() local: string = '';
  
  @Output() participacaoEvent = new EventEmitter<string>();
  
  mensagemInscricao: string | null = null;
  
  participar(): void {
    this.mensagemInscricao = `Você se inscreveu no evento: ${this.titulo}`;
    this.participacaoEvent.emit(this.titulo);
  }
}
