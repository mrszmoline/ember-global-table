'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    this.addPackageToProject('ember-truth-helpers', '^2.0.0');
    this.addPackageToProject('ember-cli-string-helpers', '^1.8.1');
    return this.addPackageToProject('ember-responsive', '^3.0.0-beta.3');

  }
};
