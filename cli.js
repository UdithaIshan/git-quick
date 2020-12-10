#!/usr/bin/env node
const {exec} = require('child_process');
const cmdArray = process.argv;
console.log(cmdArray);
// const cmd = process.argv.slice(2).map( function(arg){
//     return "'" + arg.replace(/'/g, "'\\''") + "'";
//   }).join(' ');
// console.log(cmd)

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
        // console.log(`stdout: ${stdout}`);
    });
}

const quickPush = (branch, msg) => {
    cmdExec('git add .');
    cmdExec(`git commit -m "${msg}"`);
    cmdExec(`git push origin ${branch}`);
}

switch (process.argv[2]) {
    case "i":
        cmdExec('git init');
        break;
    case "a":
        cmdExec(`git add ${process.argv.slice(3).join(' ')}`);
        break;
    case "c":
        cmdExec(`git commit -m "${process.argv.slice(3).join(' ')}"`);
        break;
    case "p":
        process.argv[4] != null?quickPush(process.argv.slice(3,4).join(' '), process.argv.slice(4).join(' ')):cmdExec(`git push origin ${process.argv.slice(3).join(' ')}"`);
        break;
    default:
        break;
}
