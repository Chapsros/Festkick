import { Component, OnInit } from '@angular/core';
import { SongkickService } from '../songkick.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private serv: SongkickService) { 

  }

  ngOnInit(): void {
  }

}
