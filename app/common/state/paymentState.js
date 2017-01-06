/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const {makeImmutable} = require('./immutableUtil')

const paymentState = {
  setPublisherLocation: (state, location) => {
    state = makeImmutable(state)
    return state.set('publisherLocation', makeImmutable(location))
  }
  // TODO @cezaraugusto = include here all payment-related states
}

module.exports = paymentState
