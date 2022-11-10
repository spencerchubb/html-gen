/**
 * Top level datatype that represents HTML.
 * It can be a string, an HTMLObject, an array of HTMLObjects, or undefined.
 */
export type HTML = string | HTMLObject | HTMLObject[] | undefined;

type HTMLTag =
    'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'bdi'
    | 'bdo'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'caption'
    | 'cite'
    | 'code'
    | 'col'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'dialog'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hgroup'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'kbd'
    | 'label'
    | 'legend'
    | 'li'
    | 'link'
    | 'main'
    | 'map'
    | 'mark'
    | 'menu'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'noscript'
    | 'object'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'p'
    | 'picture'
    | 'pre'
    | 'progress'
    | 'q'
    | 'rp'
    | 'rt'
    | 'rtc'
    | 'ruby'
    | 's'
    | 'samp'
    | 'script'
    | 'section'
    | 'select'
    | 'slot'
    | 'small'
    | 'source'
    | 'span'
    | 'strong'
    | 'style'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'tbody'
    | 'td'
    | 'template'
    | 'textarea'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'time'
    | 'title'
    | 'tr'
    | 'track'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'
    | 'webview';

/**
 * This datatype represents a single HTML element.
 * It can have a tag, attributes, and children.
 */
type HTMLObject = {
    tag: HTMLTag;
    children: HTML;

    // Global Attributes
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    accesskey?: string;
    autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    autofocus?: boolean;
    class?: string;
    contenteditable?: boolean;
    // data-* TODO
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
}

export function htmlToStr(html: HTML) {
    if (html === undefined) {
        return '';
    } else if (typeof html === 'string') {
        return html;
    } else if (html instanceof Array) {
        return html.map(child => objToStr(child)).join('\n');
    }
    return objToStr(html);
}

function objToStr(element: HTMLObject): string {
    let tag = element.tag;
    let accesskey = element.accesskey ? ` accesskey="${element.accesskey}"` : '';
    let autocapitalize = element.autocapitalize ? ` autocapitalize="${element.autocapitalize}"` : '';
    let autofocus = element.autofocus ? ` autofocus` : '';
    let class_ = element.class ? ` class="${element.class}"` : '';
    let contenteditable = element.contenteditable ? ` contenteditable` : '';
    let dir = element.dir ? ` dir="${element.dir}"` : '';
    let draggable = element.draggable ? ` draggable` : '';
    let enterkeyhint = element.enterkeyhint ? ` enterkeyhint="${element.enterkeyhint}"` : '';
    let exportparts = element.exportparts ? ` exportparts="${element.exportparts}"` : '';
    let hidden = element.hidden ? ` hidden` : '';
    let id = element.id ? ` id="${element.id}"` : '';
    let inputmode = element.inputmode ? ` inputmode="${element.inputmode}"` : '';
    let is = element.is ? ` is="${element.is}"` : '';
    let itemid = element.itemid ? ` itemid="${element.itemid}"` : '';
    let itemprop = element.itemprop ? `itemprop="${element.itemprop}"` : '';
    let itemref = element.itemref ? `itemref="${element.itemref}"` : '';
    let itemscope = element.itemscope ? `itemscope="${element.itemscope}"` : '';
    let itemtype = element.itemtype ? `itemtype="${element.itemtype}"` : '';
    let lang = element.lang ? `lang="${element.lang}"` : '';
    let nonce = element.nonce ? `nonce="${element.nonce}"` : '';
    let part = element.part ? `part="${element.part}"` : '';
    let role = element.role ? `role="${element.role}"` : '';
    let slot = element.slot ? `slot="${element.slot}"` : '';
    let spellcheck = element.spellcheck ? `spellcheck` : '';
    let style = element.style ? `style="${element.style}"` : '';
    let tabindex = element.tabindex ? `tabindex="${element.tabindex}"` : '';
    let title = element.title ? `title="${element.title}"` : '';
    let translate = element.translate ? ` translate` : '';
    let children = element.children
        ? `\n${htmlToStr(element.children)}\n`
        : '';
    
    return `<${tag}${accesskey}${autocapitalize}${autofocus}${class_}${contenteditable}${dir}${draggable}${enterkeyhint}${exportparts}${hidden}${id}${inputmode}${is}${itemid}${itemprop}${itemref}${itemscope}${itemtype}${lang}${nonce}${part}${role}${slot}${spellcheck}${style}${tabindex}${title}${translate}>${children}</${tag}>`;
}