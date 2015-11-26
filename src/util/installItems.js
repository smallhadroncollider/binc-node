"use strict";

const R = require("ramda");
const install = require("./install");

module.exports = R.curry(function (command, items) {
    return items.length ? items.forEach(install(command)) : false;
});
