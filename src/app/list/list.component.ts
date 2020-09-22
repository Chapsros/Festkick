import {Component, Input, OnInit} from '@angular/core';
import {SongkickService} from '../songkick.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  city = 'Paris';


  hidden: boolean;
  data: any;
  dataByCity: any;


  constructor(private serv: SongkickService) {
  }

  ngOnInit(): void {
    this.hidden = false;
    this.getSongData();
    this.getSongDataByCity();
  }

  public toggleDisplay(): void {
    this.hidden = !this.hidden;
  }

  getSongData(): any {
    this.serv.getsong().subscribe((data: HttpResponse<any>) => {
      this.data = data;
    });
  }

  getSongDataByCity(): any {
    this.serv.getSongByCity(this.city).subscribe((data: HttpResponse<any>) => {
      this.dataByCity = data;
    });
  }
}

