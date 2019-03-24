const redux = require('redux');

const createStore = redux.createStore;

const initState = {
counter: 0
}


const rootReducer = (state = initState, action) => {
   return state;
}


const store = createStore(rootReducer);


console.log(store.getState());



// Dispatching Action


// Subscription
