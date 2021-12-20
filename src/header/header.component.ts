import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  animateClass:boolean=true;
  shapeClass:boolean=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.animateClass=false;
      this.shapeClass=true;
    }, 1700);
  }
 

}
