"use strict";

const R = require("ramda");
const exec = require("child_process").execSync;

const parse = require("../util/parse-stdout");
const installItems = require("../util/installItems");

const strip = function (item) {
    return item.replace(/\s+\(.+\)+$/, "");
};

module.exports = function (config) {
    if (!config.packages && config.packages.length) {
        return false;
    }

    let command = R.compose(installItems("gem install"), R.difference(config.packages), R.map(strip), parse, exec);

    try {
        command("gem list", { encoding: "utf-8" });
    } catch (error) {
        console.log(error);
    }
};
