import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
