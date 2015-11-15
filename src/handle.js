"use strict";

const yaml = require("js-yaml");
const fs = require("fs");

const home = process.env.HOME;

module.exports = function (handler, file) {
    try {
        let config = yaml.safeLoad(fs.readFileSync(`${home}/.binc/${file}.yml`, "utf8"));
        handler(config);
    } catch (e) {
        console.log(`${file}.yml`);
        console.error(e.message);
    }
};
