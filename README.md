# git-quick

<p align=center>
 <a target="_blank" href="#"><img src="https://github.com/UdithaIshan/git-quick/workflows/NPM%20Publish/badge.svg?branch=main"></a>
<!--![NPM Publish](https://github.com/UdithaIshan/git-quick/workflows/NPM%20Publish/badge.svg?branch=main)-->
</p>

git-quick cli is a single line git command executer. This also executes other basic git commands easily.

## Installation

> `npm install -g giq`

## Pre-requisites

[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## How to use single commands

_currently supports git push only_

```sh
giq p <commit_msg> <branch>
```

this command is equivalent to

```sh
git add .
git commit -m "message"
git push origin <branch>
```

## Available other commands

| git                               | giq                  |
| --------------------------------- | -------------------- |
| git init                          | giq i                |
| git remote add origin <repo link> | giq r <repo link>    |
| git add <file / .>                | giq a <file / .>     |
| git commit -m <message>           | giq c <message>      |
| git push origin <branch_name>     | giq p <branch_name>  |
| git checkout <branch_name>        | giq b <branch_name>  |
| git checkout -b <branch_name>     | giq cb <branch_name> |
| git pull origin <branch_name>     | giq pl <branch_name> |
| git blame <file_name>             | giq bl <file_name>   |
| git status                        | giq s                |
| git log                           | giq l                |
| git stash                         | giq st               |
| git pop                           | giq pop              |

**use `giq help` if you lost**

### Development

Want to contribute? **Great**!

## License

**MIT**
