"use strict";

const R = require("ramda");
const exec = require("child_process").execSync;

const parse = require("../../util/parse-stdout");

const install = R.curry(function (install, item) {
    let command = `${install} ${item}`;
    console.log(command);

    try {
        exec(command);
    } catch (error) {
        console.error(`Error running "${command}"`);
    }
});

const installItems = R.curry(function (exec, items) {
    return items.length ? items.forEach(install(exec)) : false;
});

module.exports = function (run) {
    if (!run.items && run.items.length) {
        return false;
    }

    let command = R.compose(installItems(run.install), R.difference(run.items), parse, exec);

    try {
        command(run.check, { encoding: "utf-8" });
    } catch (error) {
        console.log(error);
    }
};
