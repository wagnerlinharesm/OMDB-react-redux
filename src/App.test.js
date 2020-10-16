import {ORDER_Z_TO_A} from "./store/actions/actionTypes";
import {ORDER_A_TO_Z} from "./store/actions/actionTypes";
import {ORDER_AVERAGE_HIGH} from "./store/actions/actionTypes";
import {ORDER_AVERAGE_LOW} from "./store/actions/actionTypes";
import {order} from './store/actions/movieSearch.action';
import movieReducer from './store/reducers/movie.reduce';

describe('actions', () => {
  it('should have order Z to A', () => {
 
    const expectedAction = {
      type: ORDER_Z_TO_A
    }
    expect(order(ORDER_Z_TO_A)).toEqual(expectedAction)
  })

  it('should have order A to Z', () => {
 
    const expectedAction = {
      type: ORDER_A_TO_Z
    }
    expect(order(ORDER_A_TO_Z)).toEqual(expectedAction)
  })

  it('should have order Average Descending', () => {
 
    const expectedAction = {
      type: ORDER_AVERAGE_HIGH
    }
    expect(order(ORDER_AVERAGE_HIGH)).toEqual(expectedAction)
  })

  it('should have order Average Ascending', () => {
 
    const expectedAction = {
      type: ORDER_AVERAGE_LOW
    }
    expect(order(ORDER_AVERAGE_LOW)).toEqual(expectedAction)
  })
})

describe('Reducer', () => {
  it('should return the initial state', () => {
    console.log(movieReducer);
    expect(movieReducer(undefined, {})).toEqual(
      {
        result : {}
      }
    )
  })
})