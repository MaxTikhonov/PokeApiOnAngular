import { Component, OnInit } from '@angular/core';
import {NewServiceService} from './new-service.service';
import {HttpClient} from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: string[] = []
  modal = false
  toggle = false
  inputName = ''
  userName: string = ''
  mainResponse: any
  results: any
  response: any
  nameOfFruit = ''
  id = ''
  growthTime = ''
  maxHarvest = ''
  sizeOfFruit = ''
  smoothness = ''
  getNames() {
    this.http.get('https://pokeapi.co/api/v2/berry/?offset=0&limit=64')
    .subscribe((resp) => {
      this.mainResponse = resp
      this.results = this.mainResponse.results
      console.log(this.results)
      for(let key of this.results) {
        this.items.push(key.name)
      }
      console.log(this.items)
    })
  }
  ngOnInit(): void {
    this.getNames()
  }
  toggleCards() {
    this.toggle = !this.toggle
  }
  constructor(private http: HttpClient) {

  }
  search(event: any) {
    console.log(event)
    this.modal = true;
    this.http.get('https://pokeapi.co/api/v2/berry/' + event.path[0].textContent)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.nameOfFruit = this.response.name;
      this.id = this.response.id;
      this.growthTime = this.response.growth_time;
      this.maxHarvest = this.response.max_harvest;
      this.sizeOfFruit = this.response.size;
      this.smoothness = this.response.smoothness;
    })
  }
  selectInput(value: string) {
    this.nameOfFruit = value;
  }
}
