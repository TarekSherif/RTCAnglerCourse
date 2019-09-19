import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  students:Array<string>=["Tarek","Sherif","Ahmed","Ali"];
  constructor() { }

  ngOnInit() {
  }

}
