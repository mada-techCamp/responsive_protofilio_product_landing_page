import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css']
})
export class AboutComponent implements OnInit {
  vid:string="../../assets/vids/ksu-lap2.mov";
  vidMob:string="../../assets/vids/ksu.mov";
  width:boolean=false;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth<740){
      this.width=true;
      this.vid=this.vidMob;
    }
  }
}
