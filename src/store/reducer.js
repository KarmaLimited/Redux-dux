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
            // <li key=id>                 current state value
            results: state.results.concat({id: new Date(), value: state.counter})
        }
        case 'DELETE_RESULT':

        // thought behind it:
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1);

        // filter out the selected value using filter and the clicked elements id
        const updatedArray = state.results.filter(result => result.id !== action.resultsID);
        return{
            ...state,
            results: updatedArray
        }

        default:
            break;
    }
    // if we dispatch an action that has no case we need to return the current state
    // otherwise we will break the app
    return state;
}

export default reducer;