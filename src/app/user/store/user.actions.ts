import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const getUsersApi = createAction('[USER/API] Get users api');

export const getUsersApiSuccess = createAction('[USER/API] Get users api success',props<{ users: User[] }>());

export const getUsersApiFail = createAction('[USER/API] Get users api fail',props<{ error: string }>());