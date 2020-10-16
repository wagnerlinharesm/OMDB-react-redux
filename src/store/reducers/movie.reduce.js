import SearchMovie from "../../services/search.service"
import {ORDER_A_TO_Z} from "../actions/actionTypes";
import {ORDER_Z_TO_A} from "../actions/actionTypes";
import {FETCH_MOVIES} from "../actions/actionTypes";
import {ORDER_AVERAGE_HIGH} from "../actions/actionTypes";
import {ORDER_AVERAGE_LOW} from "../actions/actionTypes";

const initialState = {
  result : {}
}

const movieReducer = (state = initialState, action) => {
    if (action.type === FETCH_MOVIES) {
        return {
            ...state,
            result : action.payload
        };
    }
    if (action.type === ORDER_A_TO_Z) {
      let ordered = SearchMovie.sortAtoZ(state.result)
      return {
          ...state,
          result : ordered
      };
    }
    if (action.type === ORDER_Z_TO_A) {
      let ordered = SearchMovie.sortZtoA(state.result)
      return {
          ...state,
          result : ordered
      };
    }
    if (action.type === ORDER_AVERAGE_HIGH) {
      let ordered = SearchMovie.sortAverageHigh(state.result)
      return {
          ...state,
          result : ordered
      };
    }  
    if (action.type === ORDER_AVERAGE_LOW) {
      let ordered = SearchMovie.sortAverageLow(state.result)
      return {
          ...state,
          result : ordered
      };
    }    
    return state;
  }
export default movieReducer;