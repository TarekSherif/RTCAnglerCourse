import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  students:Array<string>=["Tarek","Mohamed","Sherif","Ahmed","Ali","Abd Allah"];
  search:string=""


}
