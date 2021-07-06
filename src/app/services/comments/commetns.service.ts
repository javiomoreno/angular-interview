import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/comments'
   }

  public getCommentsByPostId(id: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '?postId='+id, options).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
}
