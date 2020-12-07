#!/usr/bin/env node
const {exec} = require("child_process");
const add = require('./index');

exec("git status", (error, stdout, stderr) => {
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

console.log(add(Number(process.argv[2]), Number(process.argv[3])));