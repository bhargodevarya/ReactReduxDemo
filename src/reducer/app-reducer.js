/**
Actions are WHAT, Reducers are HOW.
Reducers contain logic of how the store changes.
Reducers are pure functions that take the current state and an action as params.
pure functions mean that they dont produce any side effects.
Reducers are used to create the store for the application
The function below is an example of a reducer.

There will be multiple reducers in a complex app which work on diffrent parts of the store i.e.
state.
redux's combinerReducers is used to combine various reducers.
**/
//TODO try combinerReducers
//TODO reducer with side effects
let initialState = 0;

function reducer(state=initialState,action) {
  switch (action.type) {
    case 'INCREMENT': let newState = state;
      return newState+1
      break;
    default:
      return state;
    }
}

module.exports = reducer
