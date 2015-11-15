"use strict";

const run = require("./brew/brew-run");

module.exports = function (config) {
    [{
        check: "brew tap",
        items: config.taps,
        install: "brew tap"
    }, {
        check: "brew cask list",
        items: config.packages,
        install: "brew cask install"
    }].forEach(run);
};
