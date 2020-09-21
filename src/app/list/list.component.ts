import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lat: number;
  lon: number;
  event: Object;

  constructor(private serEvent: EventsService) { }

  ngOnInit(): void {
  }

  getEventData() {
    this.serEvent.getEvents(this.lat, this.lon).subscribe(
      (data) => {
        this.event = data
      }
    )
  }
}
