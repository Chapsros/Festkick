import {Component, Input, OnInit} from '@angular/core';
import {SongkickService} from '../songkick.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  longitude = 48.114384;
  latitude = -1.669494;

  ip = '94.228.36.39';
  data: any;

  constructor(private serv: SongkickService) { }

  ngOnInit(): void {
    this.getSongData();
  }

  getSongData(): any{
    this.serv.getsong(this.ip).subscribe((data: HttpResponse<any>) => {
      this.data = data;
    });
  }

}
