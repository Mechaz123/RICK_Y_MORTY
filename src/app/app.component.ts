import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  characters: any;
  title = 'Rick_and_Morty';
  page = 1;
  constructor() {}

  ngOnInit(): void {
    this.peticion();
  }
  // Make a request for a user with a given ID
  peticion = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${this.page}`)
      .then((response) => {
        // handle success
        this.characters = response.data.results;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  next = () => {
    if (this.page < 42){
      this.page++;
      this.peticion();
    }
  };

  previous = () => {
    if (this.page > 1) {
      this.page--;
      this.peticion();
    }
  };
}
