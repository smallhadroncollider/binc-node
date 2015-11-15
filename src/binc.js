#!/usr/bin/env node

"use strict";

const map = require("./map");
const handle = require("./handle");

map.forEach(handle);
