#!/usr/bin/env node

"use strict";

const handlers = require("./handlers");

const handle = require("./handle");
const setup = require("./setup");

const mkdirp = require("mkdirp");
const home = process.env.HOME;

mkdirp(`${home}/.binc`, function(err) {
    if (err) {
        return console.log(err);
    }

    handlers.filter(setup).forEach(handle);
});
