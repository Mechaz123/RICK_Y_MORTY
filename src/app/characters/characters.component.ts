import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any;
  page = 1;

  constructor() { }

  ngOnInit(): void {
    this.peticion();
  }
  
  // Make a request for a user with a given ID
  peticion = () => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${this.page}`).then((response) => {
      // handle success
      this.characters = response.data.results;
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  };

  next = () => {
    if (this.page < 42) {
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
