// Libraries
const core = require('@actions/core');

// Utils
const runCommand = require('../utils/runCommand');

async function runTestPipelineReact() {

  const pm = core.getInput("package_manager")

  try {
    runCommand(`${pm} install`);
    runCommand(`${pm} run test`);
    runCommand(`${pm} run coverage`);
    runCommand(`${pm} run lint`);
    runCommand(`${pm} run prettier`);
  } catch (error) {
    core.setFailed(`❌ Erroe: ${error}`);
  }
}

module.exports = runTestPipelineReact