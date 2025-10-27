// index.js — root entry
const Viewer = require('./lib/camunda-platform/Viewer');  // adjust path according to your build output
const Modeler = require('./lib/camunda-platform/Modeler'); // adjust path

module.exports = Viewer; // default export
module.exports.Viewer = Viewer;
module.exports.Modeler = Modeler;
