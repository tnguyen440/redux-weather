import * as types from '../actions/actionTypes';

export default function(state = [], action) {
    //console.log('Action received: ', action);
    switch (action.type) {
        case types.FETCH_WEATHER:
            return [ action.payload.data, ...state]; //[ city, city, city ] NOT [ city, [city, city] ]
        default:
            return state;    
    }
    //return state;
}