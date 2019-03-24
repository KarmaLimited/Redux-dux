const redux = require('redux');

const createStore = redux.createStore;

const initState = {
   counter: 0
}


const rootReducer = (state = initState, action) => {
   if (action.type === 'INC_COUNTER') {

      // -> state.counter++; 
      // this is mutation the state which is the biggest no-no of redux
      return {
         //take a copy of the current state
         ...state,
         // and overwrite the value you want to change
         // like this
         counter: state.counter + 1

      }
   }
   if (action.type === 'ADD_COUNTER') {

      return {
         ...state,
         counter: state.counter + action.value
      }
   }


   return state;
}


const store = createStore(rootReducer);




// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

// * Other ways to use dispatch
// store.dispatch({type: 'ADD_COUNTER', value: 10, name: 'Joe', id: 123})
// store.dispatch({type: 'ADD_COUNTER', payload:{value: 10, name: 'Joe', id: 123}})

// Subscription


console.log(store.getState()); 