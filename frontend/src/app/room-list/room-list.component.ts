import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  filterForm: any


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

buildForm(){
  this.filterForm = this.fb.group({
    accomodationType:[],
    category:[],
    size:[],
    city:[],
    area:[],
    price:[15000],
  })
}


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  test(){
    console.log(this.filterForm.controls.price.value);
    
  }
 

}
