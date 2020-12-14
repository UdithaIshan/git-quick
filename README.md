# git-quick

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

git-quick is single line git command executer. This also executes other basic git commands easily..

# Installation
> ```npm install -g giq```

# Requirements
> ``` git ``` must install first.
 
# How to use single commands
> currently only supports git push only.

```sh
giq p <commit_msg> <branch>
```
this command is equivalent to 
```sh
git add .
git commit -m "message"
git push origin <branch>
```

# Available other commands

| git | giq |
| ------ | ------ |
| git init | giq i |
| git remote add origin <repo link>  | giq r <repo link>|
| git add <file / .> | giq a <file / .> |
| git commit -m <message> | giq c <message> |
| git push origin <branch>  | giq p <branch> |
| git checkout <branch_name> | giq b <branch_name> |
| git checkout -b <branch_name> | giq cb <branch_name> |
| git pull origin <branch> | giq pl <branch> |


### Development

Want to contribute? Great!



License
----

MIT
