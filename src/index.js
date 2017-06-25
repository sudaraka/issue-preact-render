/**
 * src/index.js: main application entry point
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { h, render, Component } from 'preact'
import { Router, route } from 'preact-router'

const
  INITIAL_STATE = [
    'Thing 1',
    'Thing 2',
    'Thing 3'
  ],

  handleShowMessageClick = () => route('/message', true),

  handleHideMessageClick = () => route('/', true),

  List = ({ list }) => (
    <ul>
      { list.map(item => (<li key={ item }>{ item }</li>)) }
    </ul>
  ),

  Message = () => (
    <div>
      <p>
        This message is rendered by a child component passed to the main App
        component in a particular route.
      </p>
      <p>
        Clinking show/hide buttons does not change the application state,
        however the list is rendered with extra items in it.
      </p>
      <button type='button' onClick={ handleHideMessageClick }>hide message</button>
    </div>
  )

class App extends Component {
  componentWillMount() {
    this.setState({ 'list': INITIAL_STATE })
  }

  render({ children }, { list }) {
    return (
      <div className='container'>
        { 0 < children.length
            ? children
            : <button type='button' onClick={ handleShowMessageClick }>show message</button>
        }
        <List list={ list } />
      </div>
    )
  }
}

render(
  <Router>
    <App path='/' />
    <App path='/message'>
      <Message />
    </App>
  </Router>,
  document.querySelector('#app')
)
