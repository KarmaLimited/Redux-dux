const redux = require('redux');
const createStore = redux.createStore;

const initState = {
   counter: 0
}

const rootReducer = (state = initState, action) => {
   if (action.type === 'INC_COUNTER') {
      return {
         ...state,
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


/* 
Subscription
are used 'instead' of console.log to listen for changes in the store
and inform the system or you whats happend
subscribe takes 1 fn which runs after the state has been updated
but there is a way around it, like so:

the subscribtion should be placed after the store to avoid sideeffects in the redux flow
*/
store.subscribe(() => {
   // and in here you can do whatever
   console.log('Subscription:', store.getState());
})



store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

console.log(store.getState(), 'last console.log'); 