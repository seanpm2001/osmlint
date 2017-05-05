'use strict';

module.exports = {
  'bridgeOnNode': require('./validators/bridgeOnNode'),
  'filterDate': require('./validators/filterDate'),
  'filterUsers': require('./validators/filterUsers'),
  'missingLayerBridges': require('./validators/missingLayerBridges'),
  'untaggedWays': require('./validators/untaggedWays'),
  'missingNameHighwaysUS': require('./validators/missingNameHighwaysUS'),
  'selfIntersectingHighways': require('./validators/selfIntersectingHighways'),
  'unclosedWays': require('./validators/unclosedWays'),
  'crossingHighways': require('./validators/crossingHighways'),
  'unconnectedHighways': require('./validators/unconnectedHighways'),
  'crossingWaterwaysHighways': require('./validators/crossingWaterwaysHighways'),
  'islandsHighways': require('./validators/islandsHighways'),
  'overlapHighways': require('./validators/overlapHighways'),
  'impossibleAngle': require('./validators/impossibleAngle'),
  'tigerDelta': require('./validators/tigerDelta'),
  'fixmeTag': require('./validators/fixmeTag'),
  'strangeLayer': require('./validators/strangeLayer'),
  'impossibleOneWays': require('./validators/impossibleOneWays'),
  'invalidTurnLanes': require('./validators/invalidTurnLanes'),
  'missingOneways': require('./validators/missingOneways'),
  'mixedLayer': require('./validators/mixedLayer'),
  'deprecateHighways': require('./validators/deprecateHighways'),
  'doubledPOI': require('./validators/doubledPOI'),
  'crossinghighwaysbuildings': require('./validators/crossingHighwaysBuildings'),
  'buildingpartyes': require('./validators/buildingPartYes'),
  'misspelledTags': require('./validators/misspelledTags'),
  'filterMajorHighways': require('./validators/filterMajorHighways'),
  'userNameMatch': require('./validators/userNameMatch'),
  'missingRoundabout': require('./validators/missingRoundabout'),
  'privatesource': require('./validators/privateSource'),
  'unconnectedTrafficLights': require('./validators/unconnectedTrafficLights'),
  'missingAddrPlaceOrStreetTags': require('./validators/missingAddrPlaceOrStreetTags'),
  'crossingBuildings': require('./validators/crossingBuildings'),
  'doublePlaces': require('./validators/doublePlaces'),
  'bigV1Objects': require('./validators/bigV1Objects'),
  'selfIntersectingWaterway': require('./validators/selfIntersectingWaterway')  
};