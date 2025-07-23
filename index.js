// src/index.js
const core = require('@actions/core');
const sayHello = require('./hello');
const useCore = require('./core');

async function main() {
  try {
    const action = core.getInput('action');
    core.info(`🔧 Received action: ${action}`);

    switch (action) {
      case 'SAY_HELLO':
        sayHello();
        break;
      case 'USE_CORE':
        useCore();
        break;
      default:
        core.setFailed(`❌ Unknown action: ${action}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
