// Imports
const core = require('@actions/core');
const { execSync } = require('child_process');

function runCommand(command) {
  try {
    const cwd = process.env.GITHUB_WORKSPACE;

    core.startGroup(`Running: ${command}`);
    const output = execSync(command, { stdio: 'inherit', cwd });
    core.endGroup();
    return output;
  } catch (error) {
    core.setFailed(`❌ Command failed: ${command}\n${error.message}`);
    throw error;
  }
}


module.exports = runCommand;
