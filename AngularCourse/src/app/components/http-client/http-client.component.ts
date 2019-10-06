import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

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
