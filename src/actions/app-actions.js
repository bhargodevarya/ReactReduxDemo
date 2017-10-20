import INCREMENT from '../constants/app-constants'

/**
action is the only source of info for the store.
It basically represent the action that needs to be performed on the store.
IMP:- It tells WHAT needs to happen, but does not say HOW.
It is a plain object with at least 1 mandatory field, type, of type string.
Can add more data but should keep as short as possible.
{
type:"CREATE_TODO"
}

actions are generally created using a action creator.
Following function is an example of an action creator.

Container components create the actions using actions creators.
The actions created are dispatched to the store using store.dispatch(action).
**/
//TODO async actions and action creators
//TODO react-redux way of dispatching actions
function incrementCount() {
  return {
    type: INCREMENT
  };
}

module.exports = incrementCount;
