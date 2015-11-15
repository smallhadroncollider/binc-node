"use strict";

const exec = require("child_process").execSync;
const fs = require("fs");

const home = process.env.HOME;

const create = function (file) {
    let contents = fs.readFileSync(`${__dirname}/templates/${file}.yml`, "utf-8");
    fs.writeFileSync(`${home}/.binc/${file}.yml`, contents, "utf-8");
};

const check = function (bin) {
    try {
        return exec(`which ${bin}`, { encoding: "utf-8" });
    } catch (e) {
        return false;
    }
};

module.exports = function (config) {
    let file = config.name;

    try {
        fs.readFileSync(`${home}/.binc/${file}.yml`, "utf8");
    } catch (e) {
        if (!check(config.bin)) {
            return false;
        }

        create(file);
        console.log(`Created ${file}.yml`);
    }

    return true;
};
