import { Component, OnInit } from '@angular/core';
import {SongkickService} from '../songkick.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hidden: boolean;
  data: any;
  city: string;
  eventId: any;
  details: any;

  constructor(private serv: SongkickService) {
  }

  ngOnInit(): void {
    this.hidden = false;
    this.eventId = this.data.resultsPage.results.event[0];
    this.getSongData();
  }

  public toggleDisplay(): void {
    this.hidden = !this.hidden;
  }

  getSongData(): any {
    this.serv.getsong().subscribe((data: HttpResponse<any>) => {
      this.data = data;
    });
  }

  // getSongDataByCity(): any {
  //   this.serv.getSongByCity(this.city).subscribe((data: HttpResponse<any>) => {
  //     this.data = data;
  //   })
  // }

  getDataDetails(): any {
    this.serv.getDetails(this.eventId).subscribe((details: HttpResponse<any>) => {
      this.details = details;
    })
  }
}

