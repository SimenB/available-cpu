'use strict';

const cp = require('child_process');
const os = require('os');

function getFromPlatform() {
    switch (process.platform) {
        case 'linux': {
            const result = cp.spawnSync('nproc');
            return Number(result.stdout.toString().trim());
        }
        case 'darwin': {
            const result = cp.spawnSync('sysctl', ['-n', 'hw.logicalcpu']);
            return Number(result.stdout.toString().trim());
        }
        case 'win32': {
            return Number(process.env.NUMBER_OF_PROCESSORS);
        }
    }
}

module.exports = function processingUnits() {
  try {
    const result = getFromPlatform();

    if (typeof result === 'number' && !Number.isNaN(result) && result > 0) {
      return result
    }
  } catch (err) {
    // ignore
  }

  return null;
};
