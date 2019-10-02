
# Course Layout
-------
# Necessary Requirements 
  - HTML
  - CSS
  - JS
  - TS

---------

# Environment Setup 

## Nodejs

    # If you don't already have Nodejs installed:
    > https://nodejs.org/en/


 ## NPM

    # If you don't already have the angular/cli installed:
    > npm install -g @angular/cli

 ## create a new angular application

    > ng new application-name

 ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

--------------

# lecture 2 Data Binding



  ## create Binding component :
      > 	ng g c components/Binding
 

  ## One Way Binding
  - ### Interpolation Binding
```html
	<p>{{ name }}</p>
```
  - ### Property Binding
```html
 	<input [value]="name" />
```
  - ### Attribute Binding
```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
    <th>Savings for holiday!</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
    <td [attr.rowspan]="rowspan">$50</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>

```
  - ### Event Binding
```html
	<button (click)="showAlert('Test')">Alert</button>
```
  ## Two Way Binding
```html
	<input [(ngModel)]="name"/>
```
    # If you don't already import  FormsModule :
      > 	import { FormsModule } from '@angular/forms';

--------------
# lecture 3 Directives

  ## create directives component :
      > 	ng g c components/directives
      
## Structural directives
- *ngIf
 ```html
    <input  type="checkbox" [(ngModel)]="ShowEmp">
    
    <app-emp *ngIf="ShowEmp; else Notshow"></app-emp>
    <ng-template #Notshow>
    <h1>
    Notshow Emp
    </h1>
    </ng-template>
```
- *ngSwitchCase
 ```html
 <ng-container [ngSwitch]="switch_expression">
     <p *ngSwitchCase="match_expression_1"> 1 </p>
     <p *ngSwitchCase="match_expression_2"> 2 </p>
     <p *ngSwitchDefault> default </p> 
</ng-container>

```
- *ngFor
-- Index
-- First
-- Last
-- Even
-- Odd

 ```html
  <table>
        <tr 	*ngFor="let Emp of Emps; 
        		let i = index;
        		 let Iseven=even;
        		 let IsOdd=odd; 
        		let Islast=last; 
        		let Isfirst=first;">
                <td>
                {{Emp }}
                {{ i }}|
                {{ Iseven }}|
                {{ IsOdd }}|
                {{Islast}}|
                {{Isfirst}}
                </td>
    </tr>
</table>

```
## Attribute directives
- [ngClass]
 ```html
 <some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>

 ```
- [ngStyle]
```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>

<some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>

<some-element [ngStyle]="objExp">...</some-element>

 ```

 ###   import  bootstrap by npm  :
  > 	npm install bootstrap jquery --save
  
   ###  put it in angular.json  :
 ```html
 
 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
```

--------------
# lecture 4 Routes 
| Routes            | Parameter                                                                                  | Query                                                                                           |
|-------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| When uesd         | required                                                                                   | option                                                                                          |
| declaration       | routeName/:id                                                                              | routeName                                                                                       |
| Url               | /routeName/1                                                                               | /routeName?id=1                                                                                 |
| HTML              |  <a \[routerLink\]="\[ '/path', routeParam \]">                                            |  <a \[routerLink\]="\[ '/path' \]" \[queryParams\]="\{ page: 1 \}">                             |
| programmatically  | this\.router\.navigate\(\[ '/path', routeParam \]\)                                        | this\.router\.navigate\(\[ '/path', routeParam \],\{queryParams:\{ page: 1 \}\}\)               |
| Get Value static  | this\.tableName = this\.route\.snapshot\.paramMap\.get\('tableName'\);                     | this\.tableName = this\.route\.snapshot\.queryParamMap\.get\('tableName'\);                     |
| Get Value dynamic | this\.route\.paramMap\.subscribe\( params =>this\.tableName = params\.get\('tableName'\)\) | this\.route\.queryParamMap\.subscribe\( params =>this\.tableName = params\.get\('tableName'\)\) |

