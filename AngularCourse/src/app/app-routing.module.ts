import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';
import { HttpClientComponent } from './components/http-client/http-client.component';


const routes: Routes = [
  {
    path:"",component:AppLayoutComponent,children:[
      {path:"binding",component:BindingComponent},
      {path:"directives",component:DirectivesComponent},
      {path:"forms",component:FormsComponent},
      {path:"HttpClient",component:HttpClientComponent},
    ]
  }
 ,
  //no layout routes
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
