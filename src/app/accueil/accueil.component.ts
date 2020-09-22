import {Component, Input, OnInit} from '@angular/core';
import {SongkickService} from '../songkick.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  data: any;

  constructor(private serv: SongkickService) { }

  ngOnInit(): void {
    this.getSongData();
  }

  getSongData(): any{
    this.serv.getsong().subscribe((data: HttpResponse<any>) => {
      this.data = data;
    });
  }

}
