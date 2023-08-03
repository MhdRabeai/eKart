import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  @Input() set disableProduct(disable: boolean) {
    if (disable) {
      this.renderer.addClass(
        this.ele.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
