#!/usr/bin/env node
const {exec} = require('child_process');
const cmdArray = process.argv;
console.log(cmdArray);

const cmdExec = (cmd) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        return stdout;
    });
}

const cmdsExec = (msg, branch) => {
    const cmds = [
        'git add .',
        `git commit -m "${msg}"`,
        `git push origin ${branch}`
    ]
    let execNext = () => {
        exec(cmds.shift(), (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            else {
                console.log(stdout);
                if (cmds.length) execNext();
            }
        });
    };
    execNext();
};

// series([
//     'git add .',
//     'git commit -m "updates',
//     'git push origin dev'
// ], function(err){
//    console.log('executed many commands in a row'); 
// });

const quickPush = (branch, msg) => {
    if(!cmdExec('git add .')){
        console.log('in 1')
        if(cmdExec(`git commit -m "${msg}"`)){
            console.log('in 2')
            cmdExec(`git push origin ${branch}`);
        }
    }
    // cmdExec('git add .');
    // cmdExec(`git commit -m "${msg}"`);
    // cmdExec(`git push origin ${branch}`);
}

switch (process.argv[2]) {
    case "i":
        cmdExec('git init');
        break;
    case "a":
        series([`git add "${process.argv.slice(3).join(' ')}"`]);
        break;
    case "c":
        cmdExec(`git commit -m "${process.argv.slice(3).join(' ')}"`);
        break;
    case "p":
        process.argv[4] != null?cmdsExec(process.argv.slice(3,4).join(' '), process.argv.slice(4).join(' ')):cmdExec(`git push origin ${process.argv.slice(3).join(' ')}"`);
        break;
    default:
        break;
}