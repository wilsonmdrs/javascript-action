// Libraries
import core from '@actions/core';

// Utils
import runCommand from '../utils/runCommand';

async function runTestPipelineReactNative() {
   try {
    runCommand('yarn');
    runCommand('yarn test');
    runCommand('yarn coverage');
    runCommand('yarn lint');
    runCommand('yarn prettier');
  } catch (error) {
    core.setFailed(`❌ Erroe: ${error}`);
  }
}

export default runTestPipelineReactNative;
