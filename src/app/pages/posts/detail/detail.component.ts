import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CommentsService } from 'src/app/services/comments/commetns.service';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id;
  public postDetail: any = {};
  public listComments: any = {};
  public lastCommentDate: any;
  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private commentsService:  CommentsService) { 
      this.lastCommentDate = new Date();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(){
    this.loading = true;
    forkJoin(
      this.postsService.getPost(this.id),
      this.commentsService.getCommentsByPostId(this.id)
    ).subscribe((data: any[]) => {
      this.postDetail = data[0];
      this.listComments = data[1];
      this.loading = false;
    }), err => {
      console.log(err);
    };
  }

  upadteLastComment(e: any){
    this.lastCommentDate = e;
  }

}
