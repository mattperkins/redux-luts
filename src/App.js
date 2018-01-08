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

const defaultState = {
  welcome: 'Hey?!',
  otherState: 'I am just a string',
  moreState: 'Even more state'
}

const greeting = (state = defaultState, action) => {
  // reducer
  switch (action.type) {
    case 'GREET_ME':
      return { ...state, welcome: 'Hello, Fred' }
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello, World' }
    default:
      return state
  }
}

// create store
const store = createStore(greeting)

console.log(store.getState())
// dispatch action
store.dispatch({
  type: 'GREET_ME'
})

console.log(store.getState())



