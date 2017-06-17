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

export default ({ list }) => (
  <ul>
    { list.map(item => (<li key='{ item }'>{ item }</li>)) }
  </ul>
)
