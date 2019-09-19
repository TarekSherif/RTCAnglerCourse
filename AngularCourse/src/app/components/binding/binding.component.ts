import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
   name:string="Tarek Sherif";
   rowspan:number=2;

  constructor() { }

  ngOnInit() {
  }

  showAlert(massage)
  {
    alert(massage)
  };

}
