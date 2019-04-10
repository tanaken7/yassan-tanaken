import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      text: ''
    }
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div className="App">
        Yassan!<br />
        Purchased?<br />
        <textarea onChange={(e) => (this.handleChange(e.target.value))}></textarea>
        <div>
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default App;
