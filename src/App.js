import React, { Component } from 'react'
import './App.css';
import { createStore } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    )
  }
}

export default App


const hello = () => ({ welcome: 'Hello' })
const store = createStore(hello)
console.log(store.getState())