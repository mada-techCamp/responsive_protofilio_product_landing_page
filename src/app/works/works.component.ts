import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['../app.component.css']
})
export class WorksComponent implements OnInit {
  arrOfVids:string[]=["../assets/vids/proophit.MP4","../assets/vids/book1.mov","../assets/vids/Riyadh1.mov","../assets/vids/hajj.mov","../assets/vids/italian.MP4","../assets/vids/filmAd.mov"];
  arrOfpics:string[]=["../assets/img/prophit.png","../assets/img/book.png","../assets/img/london.png","../assets/img/hajj.png","../assets/img/italian.png","../assets/img/filmAd.png"];
  bkgVid="../assets/vids/hajj.mov";
  constructor() { }

  ngOnInit(): void {
   
  }
  onClick=(i:any)=>{
    this.bkgVid=this.arrOfVids[i];
  }

}
