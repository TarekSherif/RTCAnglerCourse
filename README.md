
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
      
     # add FormsModule to the imports array
            @NgModule({
              imports: [
                FormsModule,
              ],
            })

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


--------------
# lecture 4 Forms 


**Driven Forms**|**REACTIVE**|**TEMPLATE-DRIVEN**
:-----:|:-----:|:-----:
Setup (form model)|More explicit, created in component class|Less explicit, created by directives
Data model|Structured|Unstructured
Predictability|Synchronous|Asynchronous
Form validation|Functions|Directives
Mutability|Immutable|Mutable
Scalability|Low-level API access|Abstraction on top of APIs

## Reactive Driven Forms
    # If you don't already import  FormsModule :
      > 	import { ReactiveFormsModule } from '@angular/forms';
        
     # add ReactiveFormsModule to the imports array
            @NgModule({
              imports: [
                ReactiveFormsModule,
              ],
            })


```javascript
import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Item } from 'src/app/interface/item';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent   {
  items:Array<Item>=[{name:"HP 550",price:3000},{name:"Dell 150",price:3500}]
  //ReactiveForm
  frmFormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('0',Validators.required)
    });

    onFormGroupSubmit(){
      this.items.push(this.frmFormGroup.value)
      console.warn(this.frmFormGroup.value);
    }

}

```

```html
<h1>Reactive Forms </h1>

<form [formGroup]="frmReactive"  (ngSubmit)="onReactiveFromSubmit()" >

  <input type="text" name="name" placeholder="name" required
  formControlName="name"
  [ngClass]="frmReactive.get('name').invalid && frmReactive.get('name').touched ?'error':''"
  >
  <span class="message-error" *ngIf="frmReactive.get('name').invalid && frmReactive.get('name').touched">
    *
  </span>

  <input type="text" name="price" placeholder="price" required
  formControlName="price"
  [ngClass]="frmReactive.get('price').invalid && frmReactive.get('price').touched ?'error':''"

  >
  <span class="message-error" *ngIf="frmReactive.get('price').invalid && frmReactive.get('price').touched">
   *
  </span>
  <button type="submit" [disabled]="frmReactive.invalid">submit</button>

</form>
```



## Template Driven Forms 
    # If you don't already import  FormsModule :
      >     import { NgModule } from '@angular/core';
      > 	import { FormsModule } from '@angular/forms';
      
     # add FormsModule to the imports array
            @NgModule({
              imports: [
                FormsModule,
              ],
            })

```javascript
import { Component } from '@angular/core';
import { Item } from 'src/app/interface/item';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  items:Array<Item>=[{name:"HP 550",price:3000},{name:"Dell 150",price:3500}]
 
  //TemplateForm
  onFormTemplateSubmit(frmTemplate){
    this.items.push(frmTemplate.value)
    console.warn(frmTemplate.value);

  }

}

```

```html
<h1>Template Forms</h1>

<form #frmTemplate='ngForm' (ngSubmit)="onTemplateFromSubmit(frmTemplate)" >

  <input type="text" name="name" placeholder="name" required
  ngModel #name='ngModel'
  [ngClass]="name.touched && name.errors?.required ?'error':''"
  >
  <span class="message-error" *ngIf="name.touched && name.errors?.required">
    *
  </span>

  <input type="text" name="price" placeholder="price" required
  ngModel #price='ngModel'
  [ngClass]="price.touched && price.errors?.required ?'error':''"

  >
  <span class="message-error" *ngIf="price.touched && price.errors?.required">
   *
  </span>
  <button type="submit" [disabled]="frmTemplate.invalid">submit</button>

</form>



```
--------------
# lecture 6 HttpClient
    # If you don't already import  FormsModule :
      >     import { HttpClientModule } from '@angular/common/http';
      
     # add HttpClient to the imports array
            @NgModule({
              imports: [
                HttpClientModule,
              ],
            })
            
            
http://jsonplaceholder.typicode.com/

# PostService
    ## create to Create PostService :
      > 	ng g i services/post

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclint:HttpClient) { }

  getPosts(){
       return   this.httpclint.get("http://jsonplaceholder.typicode.com/posts");
  }
}

```

```javascript
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/serves/post.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  posts
  constructor(private post:PostService) { }

  ngOnInit() {
    this.post.getPosts().subscribe(
      (data)=> this.posts=data
      );
  }

}

```

```html
<h1>posts</h1>
<hr>
<details *ngFor="let post of posts">
  <summary>{{post.title}}</summary>
  <p>{{post.body}}</p>
</details>
```
--------------

    
