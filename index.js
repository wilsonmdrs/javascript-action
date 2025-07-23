// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');
const sayHello = require('./src/hello')
const useCore = require('./src/core')

// use an async function for the main tasks
async function main() {
    const action = core.getInput('action')

    switch (action) {
        case "SAY_HELLO":
            sayHello()
            break;
        case "USE_CORE":
            useCore()
            break;
    
        default:
            core.error("Error: No action was Provided!")
            break;
    }
}
// call the function
main();
