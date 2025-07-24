// Imports
const core = require('@actions/core');
const { execSync } = require('child_process');

function runCommand(command) {
  try {
    core.startGroup(`Running: ${command}`);
    const output = execSync(command, { stdio: 'inherit' });
    core.endGroup();
    return output;
  } catch (error) {
    core.setFailed(`❌ Command failed: ${command}\n${error.message}`);
    throw error;
  }
}


module.exports = runCommand;
