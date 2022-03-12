import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() image: string | undefined;
  
  constructor() {}
  ngOnInit(): void {}
}
