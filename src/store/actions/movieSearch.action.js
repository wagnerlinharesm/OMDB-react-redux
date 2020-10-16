import SearchMovie from "../../services/search.service"
import {FETCH_MOVIES} from "./actionTypes";
import {ORDER_A_TO_Z} from "./actionTypes";
import {ORDER_Z_TO_A} from "./actionTypes";
import {ORDER_AVERAGE_HIGH} from "./actionTypes";
import {ORDER_AVERAGE_LOW} from "./actionTypes";


export const fetchMovies = (inputSearch) => {
  return dispatch => {
    SearchMovie.getData(inputSearch).then(response => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response
      })
    }).catch(() => {
      dispatch({
        type: FETCH_MOVIES,
        payload: {}
      })
    });

  }
}

export function order(type) { 
  switch(type){
    case  ORDER_A_TO_Z:
      return { type: ORDER_A_TO_Z};
    case  ORDER_Z_TO_A:
      return { type: ORDER_Z_TO_A};
    case  ORDER_AVERAGE_HIGH:
      return { type: ORDER_AVERAGE_HIGH};
    case  ORDER_AVERAGE_LOW:
        return { type: ORDER_AVERAGE_LOW};      
    default:
      return { type: ORDER_A_TO_Z} 
  }
}
