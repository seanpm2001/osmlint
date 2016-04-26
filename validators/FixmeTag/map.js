'use strict';
var turf = require('turf');

// Filter all objects which has fixme tag.
module.exports = function(tileLayers, tile, writeData, done) {
  var layer = tileLayers.osm.osm;
  var result = layer.features.filter(function(obj) {
    return (obj.properties.fixme || obj.properties.FIXME);
  });

  if (result.length > 0) {
    var fc = turf.featurecollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }
  done(null, null);
};