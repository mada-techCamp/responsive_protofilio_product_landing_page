import {  HostListener,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meanue',
  templateUrl: './meanue.component.html',
  styleUrls: ['./meanue.component.css']
})
export class MeanueComponent implements OnInit {
  classMenu:boolean=false;
  navBkg=false;
  constructor() { 
      
  }
  @HostListener('window:scroll', ['$event']) 
  onScroll($event:Event):void {
   window.scrollY>(window.innerHeight-(window.innerHeight/18))?this.navBkg=true:window.scrollY<window.innerHeight?this.navBkg=false:"";
  };
  ngOnInit(): void {
  }
 
  onClick(){
    this.classMenu?this.classMenu=false:this.classMenu=true;
  }
  onHide(){
    window.innerWidth<800?this.classMenu=false:"";
  }
}