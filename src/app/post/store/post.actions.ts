import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const getDataApi = createAction('[POST/API] Get Data Api');

export const getDataApiSuccess = createAction('[POST/API] Get Data Api Success', props<{posts:Post[]}>());

export const getDataApiFail = createAction('[POST/API] Get Data Api Fail', props<{error}>());