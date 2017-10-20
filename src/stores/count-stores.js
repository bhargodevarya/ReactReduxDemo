import {EventEmitter} from 'events'

function createStore(initialState, reducer) {
  let state = initialState
  let subscribers =[]


  function getState() {
    return this.state
  }

  function subscribe(cb) {
    subscribers.push(cb)
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach(sub =>{
      sub()
    })
  }

  return {getState, subscribe, dispatch}
}

module.exports = createStore
