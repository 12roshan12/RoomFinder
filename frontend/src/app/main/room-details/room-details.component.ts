import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class RoomDetailsComponent implements OnInit {
  slides:any
  slides1:any
  slides2:any
  constructor() { 
    this.slides = [
      'assets/images/r11.jpg',
      'assets/images/r12.jpg',
      'assets/images/r13.jpg',
    ];
    this.slides1 = [
      'assets/images/r12.jpg',
      'assets/images/r13.jpg',
      'assets/images/r11.jpg',
    ];
    this.slides2 = [
      'assets/images/r13.jpg',
      'assets/images/r11.jpg',
      'assets/images/r12.jpg',
    ];
  }

  ngOnInit(): void {
  }

}
