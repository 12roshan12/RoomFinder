import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RoomListComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({})


  constructor(private fb: FormBuilder) {
    this.buildForm()

  }

  ngOnInit(): void {
  }

  buildForm() {
    this.filterForm = this.fb.group({
      accomodationType: [],
      category: [],
      size: [],
      city: [],
      area: [],
      price: [15000],
    })
  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  test() {
    console.log(this.filterForm.get('price')?.value);

  }
  search() {
    console.log(this.filterForm.value);

  }

}
