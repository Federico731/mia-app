const redux = require('redux');
const createStore = redux.createStore;

// ACTION

const aumenta = () => {
    return {
        type: "AUMENTA",
        value: 5,
    }
}

// REDUCER

const initialState = {
    counter: 1
}
const reducer = (state = initialState, action) => {
    if (action.type === "AUMENTA") {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
  return state;
}

// STORE

const store = createStore(reducer);
console.log(store.getState())

// SUBSCRIPTION

store.subscribe(() => {
    console.log('from subscription', store.getState())
})

// DISPATCH
 
store.dispatch(aumenta());
console.log(store.getState());

