"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var obj = {
    tag: 'div',
    children: [
        {
            tag: 'h1',
            children: 'Hello World'
        },
    ]
};
console.log(index_1.htmlToStr(obj));
