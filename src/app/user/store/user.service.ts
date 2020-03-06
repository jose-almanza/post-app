import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { UserState } from './user.reducer';
import { getUsersApi } from './user.actions';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { selectAllUsers } from './user.selectors';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private store: Store<UserState>){}

    loadUser(){
        return this.store.dispatch({ type: getUsersApi.type });
    }

    getAllUsers(): Observable<User[]>{
        return this.store.pipe(select(selectAllUsers));
    }
}