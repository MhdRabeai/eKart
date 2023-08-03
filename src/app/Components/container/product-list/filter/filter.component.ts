import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outStock: number = 0;

  @Output()
  selectedFilterChange: EventEmitter<string> = new EventEmitter<string>();
  selectedFilter: string = 'all';
  onSelectedFilterChange() {
    this.selectedFilterChange.emit(this.selectedFilter);
  }
}
