import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  @Input() title = ''
  @Output() close = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

}
