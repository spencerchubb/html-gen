"use strict";
exports.__esModule = true;
exports.htmlToStr = void 0;
function htmlToStr(html) {
    if (html === undefined) {
        return '';
    }
    else if (typeof html === 'string') {
        return html;
    }
    else if (html instanceof Array) {
        return html.map(function (child) { return objToStr(child); }).join('\n');
    }
    return objToStr(html);
}
exports.htmlToStr = htmlToStr;
function objToStr(element) {
    var tag = element.tag;
    var accesskey = element.accesskey ? " accesskey=\"" + element.accesskey + "\"" : '';
    var autocapitalize = element.autocapitalize ? " autocapitalize=\"" + element.autocapitalize + "\"" : '';
    var autofocus = element.autofocus ? " autofocus" : '';
    var class_ = element["class"] ? " class=\"" + element["class"] + "\"" : '';
    var contenteditable = element.contenteditable ? " contenteditable" : '';
    var dir = element.dir ? " dir=\"" + element.dir + "\"" : '';
    var draggable = element.draggable ? " draggable" : '';
    var enterkeyhint = element.enterkeyhint ? " enterkeyhint=\"" + element.enterkeyhint + "\"" : '';
    var exportparts = element.exportparts ? " exportparts=\"" + element.exportparts + "\"" : '';
    var hidden = element.hidden ? " hidden" : '';
    var id = element.id ? " id=\"" + element.id + "\"" : '';
    var inputmode = element.inputmode ? " inputmode=\"" + element.inputmode + "\"" : '';
    var is = element.is ? " is=\"" + element.is + "\"" : '';
    var itemid = element.itemid ? " itemid=\"" + element.itemid + "\"" : '';
    var itemprop = element.itemprop ? "itemprop=\"" + element.itemprop + "\"" : '';
    var itemref = element.itemref ? "itemref=\"" + element.itemref + "\"" : '';
    var itemscope = element.itemscope ? "itemscope=\"" + element.itemscope + "\"" : '';
    var itemtype = element.itemtype ? "itemtype=\"" + element.itemtype + "\"" : '';
    var lang = element.lang ? "lang=\"" + element.lang + "\"" : '';
    var nonce = element.nonce ? "nonce=\"" + element.nonce + "\"" : '';
    var part = element.part ? "part=\"" + element.part + "\"" : '';
    var role = element.role ? "role=\"" + element.role + "\"" : '';
    var slot = element.slot ? "slot=\"" + element.slot + "\"" : '';
    var spellcheck = element.spellcheck ? "spellcheck" : '';
    var style = element.style ? "style=\"" + element.style + "\"" : '';
    var tabindex = element.tabindex ? "tabindex=\"" + element.tabindex + "\"" : '';
    var title = element.title ? "title=\"" + element.title + "\"" : '';
    var translate = element.translate ? " translate" : '';
    var children = element.children
        ? "\n" + htmlToStr(element.children) + "\n"
        : '';
    return "<" + tag + accesskey + autocapitalize + autofocus + class_ + contenteditable + dir + draggable + enterkeyhint + exportparts + hidden + id + inputmode + is + itemid + itemprop + itemref + itemscope + itemtype + lang + nonce + part + role + slot + spellcheck + style + tabindex + title + translate + ">" + children + "</" + tag + ">";
}
