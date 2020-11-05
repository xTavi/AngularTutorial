import { Component } from '@angular/core';
// import { EventThumbnailComponent } from './event-thumbnail.component';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>
      Upcoming angular Events
    </h1>
    <hr>
    <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
  `
})

export class EventsListComponent {
    event1 = {
      id: 1,
      name: 'Angular Connect',
      date: '9/25/2020',
      time: '10:10 am',
      price: 1000,
      imageUrl: '/assets/images/angularconnect-shield.png'
    }
}
