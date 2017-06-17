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
  INITIAL_STATE = [
    'Thing 1',
    'Thing 2',
    'Thing 3'
  ]

export default (state = INITIAL_STATE, action) => {

  if('LIST_ADD' === action.type) {
    return [
      ...state || INITIAL_STATE,
      action.payload
    ]
  }

  if('LIST_REMOVE' === action.type) {
    return state.filter(item => item !== action.payload)
  }

  return state
}
