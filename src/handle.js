"use strict";

const yaml = require("js-yaml");
const fs = require("fs");

const home = process.env.HOME;

module.exports = function (config) {
    let contents,
        file = config.name,
        handler = require(`./handlers/${file}`);

    try {
        contents = fs.readFileSync(`${home}/.binc/${file}.yml`, "utf8");
    } catch (e) {
        return false;
    }

    try {
        handler(yaml.safeLoad(contents));
    } catch (e) {
        console.log(`${file}.yml`);
        console.error(e.message);
    }
};
