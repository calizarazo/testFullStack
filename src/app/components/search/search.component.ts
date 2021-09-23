import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: SearchComponent }],
})
export class SearchComponent implements OnInit {

  @Input() listData;
  @Output() updateList = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private filter: FilterPipe
  ) { }


  collectionForm = this.fb.group({
    keyword: ['']    
  });

  ngOnInit(): void {

  }

  onSubmit(){
    let newData = [...this.filter.transform(
      this.listData, { 
        name: this.collectionForm.get("keyword").value
      }
    )];

    newData = [ ...newData, ...this.filter.transform(
      this.listData, { 
        species: this.collectionForm.get("keyword").value
      }
    )]
    newData = [...new Set(newData)];
    this.updateList.emit(newData);
  }
  
}
