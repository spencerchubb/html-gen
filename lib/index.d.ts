/**
 * Top level datatype that represents HTML.
 * It can be a string, an HTMLObject, an array of HTMLObjects, or undefined.
 */
export declare type HTML = string | HTMLObject | HTMLObject[] | undefined;
declare type HTMLTag = 'a' | 'abbr' | 'address' | 'area' | 'article' | 'aside' | 'audio' | 'b' | 'base' | 'bdi' | 'bdo' | 'blockquote' | 'body' | 'br' | 'button' | 'canvas' | 'caption' | 'cite' | 'code' | 'col' | 'colgroup' | 'data' | 'datalist' | 'dd' | 'del' | 'details' | 'dfn' | 'dialog' | 'div' | 'dl' | 'dt' | 'em' | 'embed' | 'fieldset' | 'figcaption' | 'figure' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'header' | 'hgroup' | 'hr' | 'html' | 'i' | 'iframe' | 'img' | 'input' | 'ins' | 'kbd' | 'label' | 'legend' | 'li' | 'link' | 'main' | 'map' | 'mark' | 'menu' | 'meta' | 'meter' | 'nav' | 'noscript' | 'object' | 'ol' | 'optgroup' | 'option' | 'output' | 'p' | 'picture' | 'pre' | 'progress' | 'q' | 'rp' | 'rt' | 'rtc' | 'ruby' | 's' | 'samp' | 'script' | 'section' | 'select' | 'slot' | 'small' | 'source' | 'span' | 'strong' | 'style' | 'sub' | 'summary' | 'sup' | 'table' | 'tbody' | 'td' | 'template' | 'textarea' | 'tfoot' | 'th' | 'thead' | 'time' | 'title' | 'tr' | 'track' | 'u' | 'ul' | 'var' | 'video' | 'wbr' | 'webview';
/**
 * This datatype represents a single HTML element.
 * It can have a tag, attributes, and children.
 */
declare type HTMLObject = {
    tag: HTMLTag;
    children: HTML;
    accesskey?: string;
    autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    autofocus?: boolean;
    class?: string;
    contenteditable?: boolean;
    dir?: 'ltr' | 'rtl' | 'auto';
    draggable?: boolean;
    enterkeyhint?: string;
    exportparts?: string;
    hidden?: boolean;
    id?: string;
    inputmode?: string;
    is?: string;
    itemid?: string;
    itemprop?: string;
    itemref?: string;
    itemscope?: string;
    itemtype?: string;
    lang?: string;
    nonce?: string;
    part?: string;
    role?: string;
    slot?: string;
    spellcheck?: boolean;
    style?: string;
    tabindex?: number;
    title?: string;
    translate?: boolean;
};
export declare function htmlToStr(html: HTML): string;
export {};
