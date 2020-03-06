import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../post/store/post.model';
import { User } from '../../user/store/user.model';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private API_PATH = "https://jsonplaceholder.typicode.com";
    private API_ROUTE = {
      post: "posts",
      user: "users"
    }

    constructor (private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
      return this.http
        .get<Post[]>(`${this.API_PATH}/${this.API_ROUTE.post}`)
        .pipe(map(posts => posts || []));
    }

    getAllUsers(): Observable<User[]> {
      return this.http
        .get<User[]>(`${this.API_PATH}/${this.API_ROUTE.user}`)
        .pipe(map(users => users || []));
    }

    getUserById(userId:string): Observable<User[]> {
      return this.http
        .get<User[]>(`${this.API_PATH}/${this.API_ROUTE.user}/${userId}`)
        .pipe(map(users => users || []));
    }
}