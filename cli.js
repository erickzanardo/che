#!/usr/bin/env node

var args = process.argv;
var text = args[args.length - 1];

var encoder = require('./index.js');
process.stdout.write(encoder(text));
