import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-seearch',
  templateUrl: './seearch.component.html',
  styleUrls: ['./seearch.component.css'],
})
export class SeearchComponent {
  searchText: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearch() {
    this.searchTextChanged.emit(this.searchText);
  }
  @ViewChild('searchInput') searchInputEle: ElementRef;
  updataSearchText() {
    this.searchText = this.searchInputEle.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
