import { createAction, props } from "@ngrx/store";
import { PocInfo } from "../entity";

export const GET_POC = '[Build Call] Get Poc';
export const GET_POC_SUCCESS = '[Build Call] Get Poc Success';
export const GET_POC_FAILURE = '[Build Call] Get Poc Failure';

export const getPocs = createAction(GET_POC);

export const getPocSuccess = createAction(
  GET_POC_SUCCESS,
  props<any>()
)

export const getPocFailure = createAction(
  GET_POC_FAILURE,
  props<{message: string}>()
)