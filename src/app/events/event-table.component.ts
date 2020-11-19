import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: './event-table.component.html'
})
export class EventTableComponent implements OnInit {
  events: IEvent[];
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource: TableElement[];


  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    this.dataSource = this.events.map((object) => {
      const {date, time, location, imageUrl, sessions, ...newObj} = object;
      return newObj;
    });

    // let eee = this.events[0];
    // const {id, price, name, ...obj} = eee;
    // console.log({obj, eee});

    console.log(this.dataSource);

  }

}

export interface TableElement {
  id: number;
  name: string;
  price: number;
}
