import { createStore, combineReducers } from 'redux'

import numbersRedecer from './reducers/numbers'

const reducers = combineReducers({
    numbers: numbersRedecer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig