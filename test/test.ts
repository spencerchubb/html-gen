import { HTML, htmlToStr } from '../lib/index';

let obj: HTML = {
    tag: 'div',
    children: [
        {
            tag: 'h1',
            children: 'Hello World',
        },
    ],
}

console.log(htmlToStr(obj));