// Libraries
const core = require('@actions/core');

// Utils
const runCommand = require('../utils/runCommand');

async function runTestPipelineReact() {

  const pm = core.getInput("package_manager")
   const commands = pm?.split(',') ?? ['install', 'test', 'coverage', 'lint', 'prettier'];

   try{
    runCommand(`${pm} install`);
    
    commands.forEach((command) =>  runCommand(`${pm} run ${command}`));

  } catch (error) {
    core.setFailed(`❌ Erroe: ${error}`);
  }
}

module.exports = runTestPipelineReact