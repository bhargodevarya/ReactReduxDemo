import INCREMENT from '../constants/app-constants'

function incrementCount() {
  return {
    type: INCREMENT
  };
}

module.exports = incrementCount;
