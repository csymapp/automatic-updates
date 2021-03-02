# automatic-updates
Tools to automatically update nodejs programs installed as modules from npm/github. 

[![Build Status](https://travis-ci.com/csymapp/automatic-updates.svg?branch=master)](https://travis-ci.com/csymapp/automatic-updates)


## npm

Check the version of the installed module and compares with the lastest module in npm to check whether to install new module using `npm install -g`

Only public npm packages are supported. If you'd like your application to be private, you can consider using [github](#github)

## github

Runs `git pull` and gets github cli handle the rest.

This allows the program to freely reside in private github repos and still be able to auto-update. This requires an ssh key to be supplied.

For using github, you will create a file in `~/etc/${yourprojectname}/system.yaml` with the contents:

```yaml
sshKey: path to ssh key

```

Project name is the name in `package.json`. The active branch is master. So ensure you use that as your default branch instead of main.


