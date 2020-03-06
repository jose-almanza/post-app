import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPost from './post.reducer'

  export const selectPostState = createFeatureSelector<fromPost.PostState>(
    fromPost.postFeatureKey
  );
   
  export const selectAllPosts = createSelector(
    selectPostState,
    state => state.posts
  );