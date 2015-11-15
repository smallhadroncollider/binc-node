"use strict";

const R = require("ramda");
const exec = require("child_process").execSync;

const parse = require("../util/parse-stdout");

const install = R.curry(function (install, item) {
    let command = `${install} ${item}`;
    console.log(command);
    exec(command);
});

const installItems = R.curry(function (exec, items) {
    return items.length ? items.forEach(install(exec)) : false;
});

const run = function (run) {
    let command = R.compose(installItems(run.install), R.difference(run.items), parse, exec);

    try {
        command(run.check, { encoding: "utf-8" });
    } catch (error) {
        console.error(error);
    }
};

module.exports = function (config) {
    [{
        check: "brew tap",
        items: config.taps,
        install: "brew tap"
    }, {
        check: "brew list",
        items: config.packages,
        install: "brew install"
    }].forEach(run);
};
