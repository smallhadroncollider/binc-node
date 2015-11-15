"use strict";

const yaml = require("js-yaml");
const fs = require("fs");

const home = process.env.HOME;

module.exports = function (handler, file) {
    let contents;

    try {
        contents = fs.readFileSync(`${home}/.binc/${file}.yml`, "utf8");
    } catch (e) {
        console.log(`No ${file}.yml found`);
        return false;
    }

    try {
        handler(yaml.safeLoad(contents));
    } catch (e) {
        console.log(`${file}.yml`);
        console.error(e.message);
    }
};
