import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        switch(action.type) {
            case 'NUMBER_MIN_CHANGED':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUMBER_MAX_CHANGED':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 5,
                    max: 25
                }
        }
    },
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig