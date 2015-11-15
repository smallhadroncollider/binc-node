# binc
**Keeping your binaries in sync**

binc is a command line tool for easily keeping track of binaries that you want installed on your Mac. Sort of like [mackup](https://github.com/lra/mackup), but for your applications. Currently supports [Homebrew](http://brew.sh).

## Details

You keep track of the binaries/applications that you want installed on your computer in a `.yml` file. You can share this between computers using Dropbox. If you start working on another computer you can simply run `binc` and it will setup any applications that weren't already installed.

## Use Cases

- If you use multiple Macs and want them to run the same software
- If you want to easily reinstall your binaries on a fresh install of Mac OS X

## Currently Supports

- Home Brew

## Installation

- `npm install -g binc`

## Configuration

### Homebrew

- Create a file named `brew.yml` in the `~/.binc/` directory

```yml
taps:
    - homebrew/php

packages:
    - cmake
    - direnv
    - git
    - mackup
    - php56
    - ruby
    - thefuck
    - tmux
    - vim
    - zsh
```

## Syncing

- Run `binc` from the command line

## To Do

- Home Brew Cask Support
- Node Support
- Gem Support
- Software Update Support?
