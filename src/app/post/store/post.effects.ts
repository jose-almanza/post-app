import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import * as postApiActions from './post.actions';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
    
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(postApiActions.getDataApi),
        mergeMap(() => this.apiService.getAllPosts()
        .pipe(
            map(posts => (postApiActions.getDataApiSuccess({ posts }))),
            catchError(error => of(postApiActions.getDataApiFail({ error })))
        ))
        )
    );


  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}