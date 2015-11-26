"use strict";

const R = require("ramda");
const exec = require("child_process").execSync;

module.exports = R.curry(function (install, item) {
    let command = `${install} ${item}`;
    console.log(command);

    try {
        exec(command);
    } catch (error) {
        console.error(`Error running "${command}"`);
    }
});
