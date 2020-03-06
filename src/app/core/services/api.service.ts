import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../post/store/post.model';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private API_PATH = "https://jsonplaceholder.typicode.com/posts";

    constructor (private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
      return this.http
        .get<Post[]>(this.API_PATH)
        .pipe(map(posts => posts || []));
    }
}