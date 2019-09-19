
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
 

