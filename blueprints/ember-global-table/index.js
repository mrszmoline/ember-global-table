'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  beforeInstall: function() {
    return this.addAddonsToProject([{
        name: 'ember-truth-helpers'
      },
      {
        name: 'ember-cli-string-helpers'
      },
      {
        name: 'ember-responsive'
      }
    ]);
  }
};
