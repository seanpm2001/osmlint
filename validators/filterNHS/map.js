'use strict';
var turf = require('turf');

module.exports = function(tileLayers, tile, writeData, done) {
  var layer = data.tiger.tiger2016;
  var osmlint = '01_dir_template';
  var result = [];
  for (var i = 0; i < layer.features.length; i++) {
    var val = layer.features[i];

    writeData(JSON.stringify(val) + '\n');
    // //here comes all your code to validate the data
    // val.properties._osmlint = osmlint;
    // result.push(val);
  }

  if (result.length > 0) {
    var fc = turf.featureCollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }

  done(null, null);
};
