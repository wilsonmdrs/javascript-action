const core = require('@actions/core');
const runTestPipelineReact = require('../test/react');
const runTestPipelineReactNative = require('../test/reactNative');

async function runTest() {
    const framework = core.getInput('framework')

    core.info(`🧪 Running tests for framework: ${framework}`);
    

  switch (framework) {
    case 'react':
      await runTestPipelineReact();
      break;
    case 'react-native':
      await runTestPipelineReactNative();
      break;
    default:
      core.setFailed(`❌ Unsupported framework: ${framework}`);
  }
}

module.exports = runTest;