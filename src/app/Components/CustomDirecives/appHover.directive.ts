import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor() {}
  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282b';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') testColor: string = 'white';
  @HostBinding('style.transition') transition: any = '0.5s';
  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = 'white';
    this.testColor = '#28282b';
    this.border = '1px solid #28282b';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282b';
    this.testColor = 'white';
    this.border = 'none';
  }
}
