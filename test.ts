import { HTML, htmlToStr } from './index';

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