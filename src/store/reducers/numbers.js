import {
    NUMBER_MIN_CHANGED,
    NUMBER_MAX_CHANGED
} from '../actions/actionsTypes'

const intialState = {
    min: 1,
    max: 30
}

export default function(state = intialState, action) {
    switch(action.type) {
        case NUMBER_MIN_CHANGED:
            return {
                ...state,
                min: action.payload
            }
        case NUMBER_MAX_CHANGED:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}