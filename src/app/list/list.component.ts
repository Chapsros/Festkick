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
  resultData: any;
  dataByCity: any;
  resultDataByCity: any;

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
      for (const i of this.data.resultsPage.results.event) {
        this.getDataDetails(i.id);
      }
    });
  }

  getSongDataByCity(): any {
    this.serv.getSongByCity(this.city).subscribe((data: HttpResponse<any>) => {
      this.dataByCity = data;
      for (const i of this.dataByCity.resultsPage.results.location) {
        this.getDataDetailsByCity(i.metroArea.id);
      }
    });
  }

  getDataDetails(id): any{
    this.serv.getDetails(id).subscribe((details: HttpResponse<any>) => {
      this.resultData = details;
    });
  }

  getDataDetailsByCity(id): any{
    this.serv.getDetails(id).subscribe((details: HttpResponse<any>) => {
      this.resultDataByCity = details;
    });
  }
}

