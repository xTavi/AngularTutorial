import { RoutesRecognized } from '@angular/router';
import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventTableComponent } from './events/event-table.component';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventsListComponent,
  CreateSessionComponent,
  EventResolver
} from './events/index';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent,
  canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/table', component: EventTableComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  { path: 'events/sessions/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];
