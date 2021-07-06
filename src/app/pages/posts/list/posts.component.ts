import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public listPosts: {};
  public loading = false;

  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.loading = true;
    this.postsServices.getAllPosts().then((data: any[])=>{
      this.listPosts = data;
      this.loading = false;
    });
  }
}
