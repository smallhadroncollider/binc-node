"use strict";

const filterEmpty = require("./filter/empty");

module.exports = function (output) {
    try {
        return output.split("\n").filter(filterEmpty);
    } catch (error) {
        console.error("Cannot split", output);
        throw error;
    }
};
