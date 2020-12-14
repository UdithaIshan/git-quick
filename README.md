# git-quick

git-quick cli is a single line git command executer. This also executes other basic git commands easily.

# Installation
> ```npm install -g giq```

# Requirements
**[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**
 
# How to use single commands
> currently supports git push only.

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
| git push origin <branch_name>  | giq p <branch_name> |
| git checkout <branch_name> | giq b <branch_name> |
| git checkout -b <branch_name> | giq cb <branch_name> |
| git pull origin <branch_name> | giq pl <branch_name> |


### Development

Want to contribute? Great!



License
----

MIT
