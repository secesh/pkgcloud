/*
 * index.js: Top-level include for the Rackspace compute module
 *
 * (C) 2011 Nodejitsu Inc.
 *
 */

exports.Client = require('./client').Client;
exports.Flavor = require('./flavor').Flavor;
exports.Image  = require('./image').Image;
exports.Server = require('./server').Server;

exports.createClient = function (options) {
  return new exports.Client(options);
};
