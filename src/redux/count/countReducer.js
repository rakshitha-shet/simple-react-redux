import { INC_COUNT } from "./countType"

const initialState = { count: 0}

export const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INC_COUNT: return {
            ...state,
            count: state.count + 1
        }
        default: return state;
    }
}