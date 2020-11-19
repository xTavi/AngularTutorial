import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px;},
    .event-image { height:100px; },
    a {cursor: pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.data.forEach((data) => {
        this.event = data['event'];
        this.addMode = false;
      });
    }


  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.eventService).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
