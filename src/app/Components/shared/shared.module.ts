import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './../container/container.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ShareedModule } from '../header/shared/shareed.module';
import { SeearchComponent } from '../container/seearch/seearch.component';

import { ProductComponent } from '../container/product-list/product/product.component';
import { ProductListComponent } from './../container/product-list/product-list.component';
import { FilterComponent } from '../container/product-list/filter/filter.component';
import { ProductDetailsComponent } from '../container/product-details/product-details.component';
import { FeaturedBrandsComponent } from '../container/featured-brands/featured-brands.component';
import { SetBackGroundDirective } from '../CustomDirecives/setBackGround.directive';
import { HighlightDirective } from '../CustomDirecives/highlight.directive';
import { AppHoverDirective } from '../CustomDirecives/appHover.directive';
import { DisableProductDirective } from '../CustomDirecives/disable-product.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    DisableProductDirective,
    SeearchComponent,
    ContainerComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    SetBackGroundDirective,
    HighlightDirective,
    AppHoverDirective,
  ],
  imports: [CommonModule, ShareedModule, FormsModule],
  exports: [
    HeaderComponent,

    SeearchComponent,
    ContainerComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    SetBackGroundDirective,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
  ],
})
export class SharedModule {}
