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
        console.log(`stdout: ${stdout}`);
    });
}

// if(cmdArray.length == 4) {
//     cmd = process.argv.slice(2).join(' ')
//     console.log(cmd);
//     exec(cmd, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     });
    
// }

switch (process.argv[2]) {
    case "i":
        cmdExec('git init');
        break;
    case "a":
        cmdExec('git add');
        break;
    case "c":
        msg = process.argv.slice(3).join(' ')
        console.log(msg);
        // cmdExec('git init');
        break;
    case "p":

    default:
        break;
}
