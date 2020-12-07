#!/usr/bin/env node
const {exec} = require('child_process');
const add = require('./index');

console.log(process.argv)
const cmd = process.argv.slice(2).join(' ');
console.log(cmd)

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