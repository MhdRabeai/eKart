import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight]',
})
export class HighlightDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.addClass(this.ele.nativeElement, 'highlight-product');
  }
  @HostListener('mouseout') OnMouseOut() {
    this.renderer.removeClass(this.ele.nativeElement, 'highlight-product');
  }
}
