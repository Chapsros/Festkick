import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hidden: boolean;

  constructor() { }

  public toggleDisplay(): void {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.hidden = false;
  }
}
