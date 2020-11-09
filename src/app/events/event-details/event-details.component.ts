import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service'

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px;},
    .event-image: { height:100px; }
  `]
})

export class EventDetailsComponent implements OnInit{

  event: any
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.event = this.eventService.getEvent(1);
  }
}
