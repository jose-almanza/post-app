import { Post } from './post.model';
import { createReducer, on, Action } from '@ngrx/store';
import { getDataApi, getDataApiSuccess, getDataApiFail } from './post.actions';

export const postFeatureKey = 'posts';

export interface PostState {
    posts: Post[];
    error: string;
}

export const initialState : PostState = {
    posts: null,
    error: null
}

const _postReducer = createReducer(
    initialState,
    on(getDataApi),
    on(getDataApiSuccess, (state, {posts}) => ({
        ...state,
        posts
      })),
    on(getDataApiFail, (state, { error }) => ({
        ...state,
        error
    })),    
);

export function postReducer(state : PostState | undefined, action : Action) {
    return _postReducer(state, action);
}