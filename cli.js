#!/usr/bin/env node
const {exec} = require('child_process');
const add = require('./index');

// const cmd = process.argv.slice(2).map( function(arg){
//     return "'" + arg.replace(/'/g, "'\\''") + "'";
//   }).join(' ');
// console.log(cmd)

const cmdArray = process.argv;
console.log(cmdArray)

if(cmdArray.length == 4) {
    cmd = process.argv.slice(2).join(' ')
    console.log(cmd);
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
else if(cmdArray.length == 5) {
    cmd = process.argv.slice(2, 4).join(' ');
    msg = process.argv.slice(4).join(' ');
    cmd = `${cmd} "${msg}"`;
    console.log(cmd);
    // exec(cmd, (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });
}

