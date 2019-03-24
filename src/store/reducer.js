const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case 'INCREMENT':
            // clone the current state into a new obj
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1
        }
        case 'ADD':
        return {
            ...state, 
            counter: state.counter + action.val
        }
        case 'SUBTRACT':
        return {
            ...state, 
            // use the data from the dispatch action.x 
            counter: state.counter - action.val
        }
        case 'STORE_RESULT':
        return{
            ...state,
            results: state.results.concat({id: new Date().toUTCString, value: state.counter})
        }
        case 'DELETE_RESULT':
        return{
            ...state,
        }

        default:
            break;
    }
    // if we dispatch an action that has no case we need to return the current state
    // otherwise we will break the app
    return state;
}

export default reducer;