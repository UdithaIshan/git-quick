# git-quick

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

git-quick is single line git command executer. This also executes other basic git commands easily..

# Installation
> ```npm install -g giq```

# Requirements
> ``` git ``` must install first.
 
# How to push using single command
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


### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!



License
----

MIT
