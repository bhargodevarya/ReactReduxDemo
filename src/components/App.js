import React from 'react'
import incrementCount from '../actions/app-actions'
import CountWidget from '../container/CountWidget'

class App extends React.Component {
  render() {
    return(
      <CountWidget store={this.props.store}/>
    );
  }
}

module.exports = App
