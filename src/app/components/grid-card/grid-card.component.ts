import { Component, Input, OnInit } from '@angular/core';
import { IResults } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.sass'],
})
export class GridCardComponent implements OnInit{
  //dato que se le injecta a GridCardComponent
  @Input() dataCharacter;

  constructor() {}
  ngOnInit(): void {

  }

}
