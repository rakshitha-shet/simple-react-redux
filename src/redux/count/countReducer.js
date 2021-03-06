import { INC_COUNT, DEC_COUNT, RESET_COUNT } from "./countType"

const initialState = { count: 0}

export const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INC_COUNT: return {
            ...state,
            count: state.count + 1
        }
        case DEC_COUNT: return {
            ...state,
            count: state.count - 1
        }
        case RESET_COUNT: return initialState
        default: return state;
    }
}