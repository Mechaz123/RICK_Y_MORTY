import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characters: Character[] | undefined;
  title = 'Rick_and_Morty';

  constructor() { }

  ngOnInit(): void {
    this.characters = [{
      "id": 1,
      "name": "Rick Sanchez",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    }];
  }
}
