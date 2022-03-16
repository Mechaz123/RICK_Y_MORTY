import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: any;
  id: number | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.peticion();
  }

  peticion = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${this.id}`).then((response) => {
      // handle success
      this.character = response.data;
      console.log(this.character);
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  };
}
