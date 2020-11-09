import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
  </div>
`,
  styles: [`
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any
  @Output() eventClick = new EventEmitter()

}
