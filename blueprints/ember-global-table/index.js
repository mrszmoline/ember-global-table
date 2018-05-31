module.exports = {
  description: 'dependencies for ember global table',

  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonToProject('ember-responsive');
  }
};
