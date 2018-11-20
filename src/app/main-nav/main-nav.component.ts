import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  private IsSearching: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  private setIsSearching(): void {
    this.IsSearching = this.IsSearching == false ? true : false;
    this.cd.detectChanges();
  }

  getIsSearching(): boolean {
    return this.IsSearching;
  }

  private hideSearchPane(): boolean {
    if (this.IsSearching) {
      return true;
    }
  }

  private searchElement() {
    alert('not yet implemented ')
  }

  ngOnInit() {
  }

}
