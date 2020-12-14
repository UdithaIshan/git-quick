#!/usr/bin/env node
const {exec} = require('child_process');
const helptxt =  require('./help');
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
        console.log(stdout);
        return;
    });
}

const cmdsExec = (cmds) => {
    let execNext = () => {
        exec(cmds.shift(), (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(stderr);
                // return;
            }
            else {
                console.log(stdout);
                if (cmds.length) execNext();
            }
        });
    };
    execNext();
};

switch (process.argv[2]) {
    case "i":
        cmdExec('git init');
        break;
    case "s":
        cmdExec('git status');
        break;
    case "l":
        cmdExec('git log');
        break;
    case "a":
        cmdExec(`git add "${process.argv.slice(3).join(' ')}"`);
        break;
    case "c":
        cmdExec(`git commit -m "${process.argv.slice(3).join(' ')}"`);
        break;
    case "p":
        process.argv[4] != null?cmdsExec(
            [
            'git config --global core.safecrlf false',
            'git add .',
            `git commit -m "${process.argv.slice(3,4).join(' ')}"`,
            `git push origin ${process.argv.slice(4).join(' ')}`
            ]
        ):cmdExec(`git push origin ${process.argv.slice(3).join(' ')}"`);
        break;
    case "r":
        cmdExec(`git remote add origin "${process.argv.slice(3).join(' ')}"`);
        break;
    case "cb":
        cmdExec(`git checkout -b "${process.argv.slice(3).join(' ')}"`);
        break;
    case "b":
        cmdExec(`git checkout "${process.argv.slice(3).join(' ')}"`);
        break;
    case "pl":
        cmdExec(`git pull origin "${process.argv.slice(3).join(' ')}"`);
        break;
    case "help":
        console.log('\x1b[42m%s\x1b[0m', 'giq help');
        
        console.log('\x1b[4m%s\x1b[0m', helptxt.giqpush);
        console.log('\nThis command is equivalent to following git commands\n');
        console.log('\x1b[4m%s\x1b[0m', helptxt.gitpush);
        console.log('\nAvailable other commands');

        console.log('\x1b[36m%s\x1b[0m', helptxt.table);
        break;
    default:
        break;
}