import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
   }

  public getAllPosts() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/posts', options).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  public getPost(id: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/posts/' + id, options).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
}
