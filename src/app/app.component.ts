import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { PresenceService } from './presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public presence: PresenceService) {}
}
