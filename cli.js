#!/usr/bin/env node

var args = process.argv;

var encoder = require('./index.js');
if(args.indexOf('-f') != -1) {
  var i = args.indexOf('-f');
  args.splice(i, 1);

  var filename = args[args.length - 1];

  var fs = require('fs');
  fs.readFile(filename, 'utf8', function(err, text) {
    if(err) {
      throw err;
    }
    process.stdout.write(encoder(text));
  })
} else {
  var text = args[args.length - 1];
  process.stdout.write(encoder(text));
}

