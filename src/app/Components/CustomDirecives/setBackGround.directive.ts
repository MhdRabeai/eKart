import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackGround]',
})
export class SetBackGroundDirective implements OnInit {
  @Input() backColor: string = '#36454f';
  @Input() textColor: string = '#fff';
  @Input('setBackGround') changeTextAndColor: {
    backColor: string;
    textColor: string;
  };

  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.ele.nativeElement,
      'backgroundColor',
      this.changeTextAndColor.backColor
    );
    this.renderer.setStyle(
      this.ele.nativeElement,
      'color',
      this.changeTextAndColor.textColor
    );
  }
}
