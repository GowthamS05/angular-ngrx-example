import { Action, createReducer, on } from "@ngrx/store";
import * as pocActions from '../actions';

export interface State {
    data?:any,
    status?:string
  }

  export const initialState: State = {
    data:[],
    status:'INITIAL'
  };

  const pocReducer = createReducer(
      initialState,  
    on(pocActions.getPocs, (state) => ({...state, status: 'INITIAL'})),
    on(pocActions.getPocSuccess, (state, result) => {
        return {data: result.response,status:'SUCCESS'}
    }),
   );
   export function reducer(state: State | undefined, action: Action): any {
    return pocReducer(state, action);
  }
  
  export const getPocs = (state: State) => {
    return {
        data: state.data,
        status: state.status
    };
  };
  