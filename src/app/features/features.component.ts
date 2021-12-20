import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features:any[]=[
    {bkgclr:"green",
  img:"../../assets/img/design.png",
  title:"تصميم حسب الطلب",
    content:"اصمم حسب طلب العميل واقوم برسم المكونات بدون استخدام قوالب جاهزة"},
    {bkgclr:"pink",
    img:"https://www.reshot.com/preview-assets/icons/SRKEMN64PU/time-SRKEMN64PU.svg",
    title:"سرعة الانجاز",
    content:"سرعة انجاز العمل فلا يتجاوز مدة اسبوع"},
    {bkgclr:"blue",
    img:"../../assets/img/low-price.png",
    title:"اسعار رخيصة",
    content:"سعر التصميم لا يتجاوز ٥٠ ريال ويترواح من ٢٠ الى ٥٠ ريال"}];
  slectedIndex=-1; 
  hover:boolean[]=[true,true,true];
  constructor() { }
  isFlipped=(index:any)=>{
    // this.scale=false;
    return index===this.slectedIndex;
  }
 flip=(index:any)=>{
  console.log(this.hover.length);
  for(let i=0;i<this.hover.length;i++){
    index===i?this.hover[i]=false:this.hover[i]=true;
  }
  this.slectedIndex=index;
  // this.isFlipped=true;
 }

  ngOnInit(): void {
  }

}
