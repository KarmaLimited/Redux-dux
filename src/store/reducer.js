const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case 'INCREMENT':
        return {
            ...state,
            counter: state.counter + 1
        }
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
        default:
            break;
    }
    // if we dispatch an action that has no case we need to return the current state
    // otherwise we will break the app
    return state;
}

export default reducer;