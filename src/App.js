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

// reducer
const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'API':
      return { ...state, info: `API: ${action.lemon}` }
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

const lemon = "This is data payload from API"

// dispatch action
store.dispatch({
  type: 'API',
  lemon
})

console.log(store.getState())

store.dispatch({
  type: 'API',
  lemon: 'Alternate API data'
})

console.log(store.getState())



