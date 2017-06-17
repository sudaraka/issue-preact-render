/**
 * src/components/List/List.js: main application component
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { h } from 'preact'
import { route } from 'preact-router'
import { connect } from 'preact-redux'

import { updateForm, clearForm, addItem } from 'Actions'

const
  Form = ({ value, ...props }) => {
    const
      handleCloseClick = () => {
        route('/', true)

        props.clearForm()
      },

      handleAddClick = () => {
        props.addItem(value)

        handleCloseClick()
      },

      handleInput = e => {
        e.preventDefault()

        props.updateForm(e.target.value)

        return false
      }

    return (
      <div>
        <hr />
        <input type='text' value={ value } onInput={ handleInput } />
        <button type='button' onClick={ handleAddClick }>Add</button>
        <button type='button' onClick={ handleCloseClick }>Cancel</button>
        <hr />
      </div>
    )
  },

  state2Props = ({ form }) => form

export default connect(
  state2Props,
  {
    updateForm,
    clearForm,
    addItem
  }
)(Form)
