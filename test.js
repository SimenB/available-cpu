'use strict';

const os = require('os');
const res = require('./')();

console.log({ res, os: os.cpus().length });
