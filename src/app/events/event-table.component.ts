import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { MatButtonModule } from '@angular/material/button';

@Component({
  templateUrl: './event-table.component.html',
  styles: ['table { width: 100%; }']
})
export class EventTableComponent implements OnInit {
  events: IEvent[];
  displayedColumns: string[] = ['id', 'name', 'price', 'date', 'time', 'location'];
  dataSource;
  color = 'red';

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    this.dataSource = this.events.map((object) => {
      const {imageUrl, sessions, ...newObj} = object;
      return newObj;
    });

    // let eee = this.events[0];
    // const {id, price, name, ...obj} = eee;
    // console.log({obj, eee});

    console.log(this.dataSource);

  }

  eventLocation(event: IEvent): string {
    if (event.location) {
      return event.location.city;
    } else {
      return 'Online Event';
    }
  }

}
