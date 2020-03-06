import { Store, select } from "@ngrx/store";
import { PostState } from '../store/post.reducer';
import { selectAllPosts } from '../store/post.selectors';
import { getDataApi } from '../store/post.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(private store: Store<PostState>) {}

    loadPost() {
        return this.store.dispatch({type: getDataApi.type});
    }
    getAllPosts(): Observable<Post[]> {
        return this.store.pipe(select(selectAllPosts));
    }
}
