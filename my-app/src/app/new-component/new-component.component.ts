import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  @Input() nameOfFruit = ''
  @Input() id = ''
  @Input() growthTime = ''
  @Input() maxHarvest = ''
  @Input() sizeOfFruit = ''
  @Input() smoothness = ''
  @Input() title = ''
  @Output() close = new EventEmitter<void>()
  constructor() {
  }
  ngOnInit(): void {
  }
}
