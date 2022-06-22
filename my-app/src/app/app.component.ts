import { Component, Input, OnInit } from '@angular/core';
import {NewServiceService} from './new-service.service';
import {HttpClient} from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headerImg: string  = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  items: string[] = []
  modal = false
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
  @Input() choosedFruit = ''
  getNames() {
    this.http.get('https://pokeapi.co/api/v2/berry/?offset=0&limit=64')
    .subscribe((resp) => {
      this.mainResponse = resp
      this.results = this.mainResponse.results
      for(let key of this.results) {
        this.items.push(key.name)
      }
    })
  }
  ngOnInit(): void {
    this.getNames()
  }
  constructor(private http: HttpClient) {

  }
  search(event: any) {
    this.http.get('https://pokeapi.co/api/v2/berry/' + event.path[0].textContent)
    .subscribe((response) => {
      this.response = response;
      this.nameOfFruit = this.response.name;
      this.id = this.response.id;
      this.growthTime = this.response.growth_time;
      this.maxHarvest = this.response.max_harvest;
      this.sizeOfFruit = this.response.size;
      this.smoothness = this.response.smoothness;
      this.modal = true;
    })
  }
  addName(name:string) {
    this.choosedFruit = name
  }
}
