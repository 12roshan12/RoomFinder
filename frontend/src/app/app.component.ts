import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screenWidth: any;
  screenHeight: any;

  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 

    console.log(this.screenHeight)
    console.log(this.screenWidth)
  }
  title = 'frontend';
}
