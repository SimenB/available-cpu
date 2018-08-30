'use strict';

const os = require('os');
const res = require('./')();
const physicalCpuCount = require('physical-cpu-count');

console.log({ res, os: os.cpus().length, physicalCpuCount });
