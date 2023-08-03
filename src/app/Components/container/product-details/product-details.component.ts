import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';

import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  productListCom!: ProductListComponent;
  selectedProduct!: Product;
  constructor() {}
  ngOnInit(): void {
    this.selectedProduct = this.productListCom.selectedProduct;
  }
}
