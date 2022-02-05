import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AppService } from '../../_services';
import * as pocActions from '../actions';

@Injectable()
export class PocEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  getPocs$ = createEffect(() =>
  this.actions$.pipe(
    ofType(pocActions.getPocs),
    exhaustMap(action =>
      this.appService.getPoc().pipe(
        map(response => {
          console.log("response:::", response)
          return pocActions.getPocSuccess({response})
        }),
        catchError((error: any) => of(pocActions.getPocFailure(error))))
    )
  )
);


}