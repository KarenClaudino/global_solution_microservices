import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]',
  standalone: true
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#FF5100';
  private originalBorder: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {

    this.originalBorder = this.el.nativeElement.style.border;
    
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.borderColor}`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'border 0.3s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.renderer.setStyle(this.el.nativeElement, 'border', this.originalBorder);
  }
}
