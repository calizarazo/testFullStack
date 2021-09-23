import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICharacters, IResults } from 'src/app/interfaces/characters';
import { DataService } from '../../services/data.service';
import { AppConst } from '../../utils/appConst';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  characters: IResults[];
  filterCharacters: IResults[];
  destroy$: Subject <boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.get().pipe(takeUntil(this.destroy$)).subscribe((data: ICharacters)=>{
      this.characters = data.results;
      this.filterCharacters = data.results;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getNewData(event) {
    this.filterCharacters = event;
  }


}
