import { Component, OnInit } from '@angular/core';
import {NewServiceService} from './new-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Angular', 'Vue', 'React']
  modal = false
  toggle = false
  inputName = ''
  userName: string = ''
  response: any
  nameOfFruit = ''
  id = ''
  growthTime = ''
  maxHarvest = ''
  sizeOfFruit = ''
  smoothness = ''
  toggleCards() {
    this.toggle = !this.toggle
  }
  constructor(private http: HttpClient) {

  }
  search() {
    this.http.get('https://pokeapi.co/api/v2/berry/' + this.userName)
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
