#!/usr/bin/env node

"use strict";

const map = require("./map");
const handle = require("./handle");

const mkdirp = require("mkdirp");
const home = process.env.HOME;

mkdirp(`${home}/.binc`, function(err) {
    return err ? console.log(err) : map.forEach(handle);
});
