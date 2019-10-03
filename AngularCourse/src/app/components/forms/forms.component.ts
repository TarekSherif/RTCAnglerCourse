import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Item } from 'src/app/interface/item';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
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


    frmFormBuilder  = this.fb.group({
      name: ['',Validators.required],
      price: ['0',[Validators.required,Validators.max(1000)]],
    });
    onFormBuilderSubmit(){
      this.items.push(this.frmFormBuilder.value)
      console.warn(this.frmFormBuilder.value);
    }

  //TemplateForm
  onFormTemplateSubmit(frmTemplate){
    this.items.push(frmTemplate.value)
  console.warn(frmTemplate.value);

  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  //  this.frmFormGroup.get('name').invalid && this.frmFormGroup.get('name').untouched
  }

}
