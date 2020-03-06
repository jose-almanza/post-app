import { createReducer, on, Action } from "@ngrx/store";
import { User } from './user.model';
import { getUsersApi, getUsersApiSuccess, getUsersApiFail } from './user.actions';

export const userFeatureKey = 'users';

export interface UserState {
    users: User[];
    error: string;
}

export const initialState : UserState = {
    users: null,
    error: null,
}

const _userReducer = createReducer(
    initialState,
    on(getUsersApi),
    on(getUsersApiSuccess,(state, {users}) => ({
        ...state,
        users
    })),
    on(getUsersApiFail, (state, {error}) => ({
        ...state,
        error
    }))
);

export function userReducer(state: UserState | undefined, action: Action) {
    return _userReducer(state, action);
}