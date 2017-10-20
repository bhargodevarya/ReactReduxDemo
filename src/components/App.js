import React from 'react'
import incrementCount from '../actions/app-actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.store.getState()
    }
    this.handleChange = this.handleChange.bind(this)
    this._onChange = this._onChange.bind(this)
  }

//registers the changeListener with the store
  componentDidMount() {
    this.props.store.subscribe(this.handleChange)
  }

  handleChange() {
    this.setState({
      count: this.props.store.getState()
    })
  }

  _onChange() {
    let action = incrementCount();
    console.log(action);
    this.props.store.dispatch(action)
  }

  render() {
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this._onChange}>click</button>
      </div>
    );
  }
}

module.exports = App
