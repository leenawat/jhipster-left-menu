import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styles: []
})
export class LeftSideMenuComponent implements OnInit {
  @Input() leftMenuHidden: boolean;
  constructor() {
    this.leftMenuHidden = false;
  }

  ngOnInit() {
  }

}
