import { Component, OnInit } from '@angular/core';
import { EventService, IEvent, ISession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media(max-width: 1200px) { #searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})

export class NavBarComponent implements OnInit{
  searchTerm = '';
  foundSessions: ISession[];
  allEvents: IEvent[];

  constructor(public authService: AuthService,
    private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data) => {
      this.allEvents = data;
    });
  }

  searchSessions(searchTerm) {
   this.eventService.searchSessions(searchTerm).subscribe(
     sessions => {
       this.foundSessions = sessions;
     }
   );
  }
}
