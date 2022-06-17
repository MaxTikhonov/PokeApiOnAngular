import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modal = false
  toggle = false
  toggleCards() {
    this.toggle = !this.toggle
  }
}
