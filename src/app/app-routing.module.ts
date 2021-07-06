import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './pages/p404/p404.component';
import { DetailComponent } from './pages/posts/detail/detail.component';
import { PostsComponent } from './pages/posts/list/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: {
      title: 'Posts'
    }
  },
  {
    path: 'post/:id',
    component: DetailComponent,
    data: {
      title: 'Post Detail'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
