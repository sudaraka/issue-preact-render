/**
 * src/actions.js: actions
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

export const
  updateForm = payload => ({
    'type': 'FORM_UPDATE',
    payload
  }),

  clearForm = () => ({ 'type': 'FORM_CLEAR' }),

  addItem = newItem => ({
    'type': 'LIST_ADD',
    'payload': newItem
  })
