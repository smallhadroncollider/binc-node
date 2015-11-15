# binc
**Keeping your binaries in sync**

binc is a command line tool for easily keeping track of binaries that you want installed on your Mac. Sort of like [mackup](https://github.com/lra/mackup), but for your applications. Currently supports [Homebrew](http://brew.sh) and [Homebrew Cask](http://caskroom.io).

## Details

You keep track of the binaries/applications that you want installed on your computer in a `.yml` file. You can share this between computers using Dropbox. If you start working on another computer you can simply run `binc` and it will setup any applications that weren't already installed.

## Use Cases

- If you use multiple Macs and want them to run the same software
- If you want to easily reinstall your binaries on a fresh install of Mac OS X

## Currently Supports

- Homebrew
- Homebrew Cask

## Installation

- `npm install -g binc`

### Recommended

We recommend using `binc` with [mackup](https://github.com/lra/mackup). Add a `binc.cfg` to your `~/.mackup` directory.

```ini
[application]
name = binc

[configuration_files]
.binc
```

## Configuration

Configuration files will be created the first time you run `binc` if they do not already exist.

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

### Homebrew Cask

- Create a file named `cask.yml` in the `~/.binc/` directory

```yml
taps:
    - caskroom/fonts

packages:
    - alfred
    - fantastical
    - google-chrome-canary
    - iterm2
    - paw
    - quicklook-json
    - sequel-pro
    - vagrant
    - virtualbox

    # Fonts
    - font-inconsolata
```

## Syncing

- Run `binc` from the command line

## To Do

- Node Support
- Gem Support
- Pip Support
- Software Update Support?
