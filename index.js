// Libraries
const core = require('@actions/core');

// Modules
const runTest = require('./src/actions/test')

async function main() {
  try {
    const action = core.getInput('action');

    switch (action) {
      case 'test':
        runTest();
        break;
      default:
        core.setFailed(`❌ Unknown action: ${action}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
