const core = require('@actions/core');

// src/useCore.js
function useCore() {
    
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
    const input_1 = core.getInput('input_1')

    core.info("INFO: input_1 = " + input_1)
    core.notice("This is a notice")
    core.warning("This is a warning")
    core.error("This is a error")
}

module.exports = useCore;