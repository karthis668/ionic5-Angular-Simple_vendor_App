import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(
    public renderer: Renderer2,
    public element: ElementRef
  ) { }

  @Input() set appHightlight(color: string){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }

}
