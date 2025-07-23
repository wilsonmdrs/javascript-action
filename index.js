const core = require('@actions/core');
const sayHello = require('./src/hello');
const runCore = require('./src/core');
const runContext = require('./src/context');

async function main() {
  try {
    const action = core.getInput('action');
    core.info(`🔧 Received action: ${action}`);

    switch (action) {
      case 'SAY_HELLO':
        sayHello();
        break;
      case 'RUN_CORE':
        runCore();
        break;
      case 'RUN_CONTEXT':
        runContext();
        break;
      default:
        core.setFailed(`❌ Unknown action: ${action}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
