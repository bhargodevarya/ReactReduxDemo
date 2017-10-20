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
