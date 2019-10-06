import { Component } from '@angular/core';
import { marquee, fade, openClose } from 'src/app/Animations/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],

  animations: [
    marquee,fade,openClose
  ]
})
export class AnimateComponent  {
stydents:Array<string>=["ssss","aaaa","ssssaaa"];
marqueeDirection: string = "left";
  isOpen:boolean=true;
  fadeStatus:string="enter"


  fade(){
    if(  this.stydents.length>1)
        this.stydents=[];
     else
        this.stydents=["ssss","aaaa","ssssaaa"];
   }

  openClose() {
    this.isOpen = !this.isOpen;
  }
  marquee() {
      this.marqueeDirection= this.marqueeDirection == 'right' ? 'left' : 'right';
   }



   toggle(){
    this.openClose()
    this.marquee()
    this.fade()
   }
}
