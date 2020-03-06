import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api.service';
import { getUsersApi, getUsersApiSuccess, getUsersApiFail } from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    @Effect()
    loadUsers$ = createEffect(() => this.actions$.pipe(        
        ofType(getUsersApi),        
        mergeMap(() => this.apiService.getAllUsers()
        .pipe(
            map(users => getUsersApiSuccess({ users })),
            catchError( error => of(getUsersApiFail({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ){}
}