// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Components
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { AnimateComponent } from './components/animate/animate.component'

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    NotFoundComponent,
    AppLayoutComponent,
    FormsComponent,
    HttpClientComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
