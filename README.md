# binc
## Keeping your binaries in sync

binc is a command line tool for easily keeping your installed applications up to date.

Sort of like [mackup](https://github.com/lra/mackup), but for your applications.

## Currently Supports

- Home Brew

## Use Cases

- If you use multiple Macs and want them to run the same software
- If you want to easily reinstall your binaries on a fresh install of Mac OS X

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
