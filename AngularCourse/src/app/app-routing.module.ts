import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path:"",component:AppLayoutComponent,children:[
      {path:"binding",component:BindingComponent},
      {path:"directives",component:DirectivesComponent}
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
