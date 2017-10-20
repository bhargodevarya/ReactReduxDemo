import React, {
  Component
} from 'react';
import incrementCount from '../actions/app-actions'
import CountWidget from '../components/CountWidget'

class CountWidgetContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.store.getState()
    }
    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
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

  onChange() {
    let action = incrementCount();
    console.log(action);
    this.props.store.dispatch(action)
  }

  render() {
    return <CountWidget count={this.state.count} onChange={this.onChange}/>
  }
}

module.exports = CountWidgetContainer
