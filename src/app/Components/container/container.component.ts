import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchText: string = '';
  selectedProduct!: any;
  @ViewChild('productListCompo') productListComponent: ProductListComponent;

  setSearchText(event: any) {
    this.searchText = event;
  }
}
