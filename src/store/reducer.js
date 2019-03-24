const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    if (action.type === 'INCREMENT') {
        return {
            ...state, // this is not really needed since we only have 1 thing in our state which is the counter property
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(type === 'INCREMENT_WITH_VALUE'){
        return {
            ...state, 
            counter: state.counter + 5
        }
    }
    if(type === 'DECREMENT_WITH_VALUE'){
        return {
            ...state, 
            counter: state.counter - 5
        }
    }
    return state;
}

export default reducer;