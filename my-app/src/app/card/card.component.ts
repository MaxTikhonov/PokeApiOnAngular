import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  choosedFruit: string = ''
  @Input() nameOfFruit = ''
  @Input() id = ''
  @Input() growthTime = ''
  @Input() maxHarvest = ''
  @Input() sizeOfFruit = ''
  @Input() smoothness = ''
  @Output() outFruitName = new EventEmitter<string>()
  @Output() close = new EventEmitter<void>()
  constructor() {
  }
  ngOnInit(): void {
  }
  toCart() {
    this.choosedFruit=this.nameOfFruit
    this.outFruitName.emit(this.choosedFruit)
  }
}
