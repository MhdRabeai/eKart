import { TopMenuComponent } from './../top-menu/top-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { TopHeaderComponent } from '../top-header/top-header.component';

@NgModule({
  declarations: [MainMenuComponent, TopMenuComponent, TopHeaderComponent],
  imports: [CommonModule],
  exports: [MainMenuComponent, TopMenuComponent, TopHeaderComponent],
})
export class ShareedModule {}
