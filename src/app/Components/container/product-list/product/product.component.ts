import { Product } from './../../../../Models/product.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products!: Product;

  @Output() test: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onEvent() {
    this.test.emit(this.products);
  }
}
