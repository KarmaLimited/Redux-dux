const redux = require('redux');

// creating a store fn ref
const createStore = redux.createStore;
// creating a reducer - the dude that actually changes the state
const rootReducer = (state, action) => {
// the state is the current state of the app
// the action is a message or payload = 'this thingy will change'

// nothing will happen/change since we're just returning the current state
return state;
}

// creating a Store
const store = createStore(rootReducer);

// logging the current state from the store(age)
console.log(store.getState());
// Reducer


// Dispatching Action


// Subscription
