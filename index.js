// index.js — root entry
const Viewer = require('./lib/camunda-platform/Viewer');
const Modeler = require('./lib/camunda-platform/Modeler');

module.exports = Modeler;       // ✅ default export → Modeler
module.exports.Modeler = Modeler;
module.exports.Viewer = Viewer;
