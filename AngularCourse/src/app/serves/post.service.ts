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
