// Libraries
import core from '@actions/core';

// Utils
import runCommand from '../utils/runCommand';

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

export default runTestPipelineReact;
