import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { value: state.value + action.value }
        case 'decrement':
            return { value: state.value - action.value }
        default:
            return state
    }
}


export const store = createStore(counterReducer)
