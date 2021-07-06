import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/list/posts.component';
import { P404Component } from './pages/p404/p404.component';
import { DetailComponent } from './pages/posts/detail/detail.component';
import { PostsService } from './services/posts/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentsService } from './services/comments/commetns.service';
import { CommentsComponent } from './pages/posts/detail/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailComponent,
    P404Component,
    CommentsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    PostsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
