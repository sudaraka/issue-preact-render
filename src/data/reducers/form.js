/**
 * src/data/reducers/list.js: reducer for list
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

const
  INITIAL_STATE = { 'value': '' }

export default (state = INITIAL_STATE, action) => {

  if('FORM_UPDATE' === action.type) {
    return {
      ...state || INITIAL_STATE,
      'value': action.payload
    }
  }

  if('FORM_CLEAR' === action.type) {
    return INITIAL_STATE
  }

  return state
}
