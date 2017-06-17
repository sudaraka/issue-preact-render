/**
 * src/data/store.js: Redux data store
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducer from 'Reducer'

const
  logger = createLogger({
    'timestamp': false,
    'duration': true
  })

export default createStore(reducer, applyMiddleware(logger))
