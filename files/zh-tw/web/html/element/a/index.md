---
title: <a>
slug: Web/HTML/Element/a
---

**HTML `<a>` 元素**（意為 Anchor）建立了通往其他頁面、檔案、Email 地址、或其他 URL 的超連結。

| [內容類型](/zh-TW/docs/HTML/Content_categories) | [流型內容](/zh-TW/docs/HTML/Content_categories#Flow_content)、[phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content), [interactive content](/zh-TW/docs/Web/Guide/HTML/Content_categories#interactive_content), palpable content.                                                                                                                                                                           |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 內容省略                                        | [Transparent](/zh-TW/docs/HTML/Content_categories#Transparent_content_model), containing either [flow content](/zh-TW/docs/HTML/Content_categories#Flow_content) (excluding [interactive content](/zh-TW/docs/Web/Guide/HTML/Content_categories#interactive_content)) or [phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content).                                                                            |
| 標籤省略                                        | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                      |
| 允許的父元素                                    | 任何允許 [phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content) 或 [flow content](/zh-TW/docs/HTML/Content_categories#Flow_content) 的內容，但 <a> 永遠例外（according to the logical principle of symmetry, if <a> tag, as a parent, can not have [interactive content](/zh-TW/docs/Web/Guide/HTML/Content_categories#interactive_content), then the same <a> content can not have <a> tag as its parent） |
| Permitted ARIA roles                            | [`button`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role), [`checkbox`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [`menuitem`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [`menuitemradio`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), [`option`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/option_role), [`radio`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role), [`switch`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role), [`tab`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/tab_role), [`treeitem`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/treeitem_role)                                                                                |
| DOM 介面                                        | {{domxref("HTMLAnchorElement")}}                                                                                                                                                                                                                                                                                                                                                                                  |

## 屬性

本元素包含[全域屬性](/zh-TW/docs/HTML/Global_attributes)。

- `download`

  - : Causes the browser to treat the linked URL as a download. Can be used with or without a value:

    - Without a value, the browser will suggest a filename/extension, generated from various sources:

      - The {{HTTPHeader("Content-Disposition")}} HTTP header
      - The final segment in the URL [path](/zh-TW/docs/Web/API/URL/pathname)
      - The {{Glossary("MIME_type", "media type")}} (from the {{HTTPHeader("Content-Type")}} header, the start of a [`data:` URL](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), or {{domxref("Blob.type")}} for a [`blob:` URL](/zh-TW/docs/Web/API/URL/createObjectURL))

    - Defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.

    > **Note:**
    >
    > - `download` only works for [same-origin URLs](/zh-TW/docs/Web/Security/Same-origin_policy), or the `blob:` and `data:` schemes.
    > - How browsers treat downloads varies by browser, user settings, and other factors. The user may be prompted before a download starts, or the file may be saved automatically, or it may open automatically, either in an external application or in the browser itself.
    > - If the `Content-Disposition` header has different information from the `download` attribute, resulting behavior may differ:
    >
    >   - If the header specifies a `filename`, it takes priority over a filename specified in the `download` attribute.
    >   - If the header specifies a disposition of `inline`, Chrome and Firefox prioritize the attribute and treat it as a download. Old Firefox versions (before 82) prioritize the header and will display the content inline.

- `href`

  - : The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:

    - Sections of a page with fragment URLs
    - Pieces of media files with media fragments
    - Telephone numbers with `tel:` URLs
    - Email addresses with `mailto:` URLs
    - While web browsers may not support other URL schemes, web sites can with [`registerProtocolHandler()`](/zh-TW/docs/Web/API/Navigator/registerProtocolHandler)

- `hreflang`
  - : Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as [the global `lang` attribute](/zh-TW/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : A space-separated list of URLs. When the link is followed, the browser will send {{HTTPMethod("POST")}} requests with the body `PING` to the URLs. Typically for tracking.
- `referrerpolicy`

  - : How much of the [referrer](/zh-TW/docs/Web/HTTP/Headers/Referer) to send when following the link.

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/zh-TW/docs/Learn/Common_questions/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/zh-TW/docs/Web/API/HTMLAnchorElement/hash), [password](/zh-TW/docs/Web/API/HTMLAnchorElement/password), or [username](/zh-TW/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- `rel`
  - : The relationship of the linked URL as space-separated [link types](/zh-TW/docs/Web/HTML/Link_types).
- `target`

  - : Where to display the linked URL, as the name for a _browsing context_ (a tab, window, or {{HTMLElement("iframe")}}). The following keywords have special meanings for where to load the URL:

    - `_self`: the current browsing context. (Default)
    - `_blank`: usually a new tab, but users can configure browsers to open a new window instead.
    - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
    - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as `_self`.

    > **Note:** Setting `target="_blank"` on `<a>` elements implicitly provides the same `rel` behavior as setting [`rel="noopener"`](/zh-TW/docs/Web/HTML/Link_types/noopener) which does not set `window.opener`. See [browser compatibility](#browser_compatibility) for support status.

- `type`
  - : Hints at the linked URL's format with a {{Glossary("MIME type")}}. No built-in functionality.

### Obsolete

- `charset` {{Deprecated_inline}}
  - : This attribute defined the [character encoding](/zh-TW/docs/Glossary/character_encoding) of the linked URL. The value should be a space- and/or comma-delimited list of character sets defined in [RFC 2045](https://tools.ietf.org/html/rfc2045). The default value is `ISO-8859-1`.

    > **備註：** This attribute is obsolete in HTML5 and **should not be used by authors**. To achieve its effect, use the HTTP [`Content-Type:`](/zh-TW/docs/Web/HTTP/Headers/Content-Type) header on the linked URL.
- `coords` {{Deprecated_Inline}}
  - : For use with the below `shape` attribute, this attribute used a comma-separated list of numbers to define the coordinates of the link on the page.
- `name` {{Deprecated_Inline}}
  - : This attribute was required for anchors defining a possible target location within a page. In HTML 4.01, `id` and `name` could be used simultaneously on a `<a>` element as long as they have identical values.

    > **備註：** This attribute is obsolete in HTML5, use the [global attribute `id`](/zh-TW/docs/HTML/Global_attributes#id) instead.
- `rev` {{Deprecated_Inline}}
  - : This attribute specified a reverse link, the inverse relationship of the **rel** attribute. It was deprecated for being very confusing.
- `shape` {{Deprecated_Inline}}
  - : This attribute was used to define a region for hyperlinks to create an image map. The values are `circle`, `default`, `polygon`, and `rect`. The format of the **coords** attribute depends on the value of shape. For `circle`, the value is `x,y,r` where `x` and `y` are the pixel coordinates for the center of the circle and `r` is the radius value in pixels. For `rect`, the **coords** attribute should be `x,y,w,h`. The `x,y` values define the upper-left-hand corner of the rectangle, while `w` and `h` define the width and height respectively. A value of `polygon` for **shape** requires `x1,y1,x2,y2,...` values for **coords**. Each of the `x,y` pairs defines a point in the polygon, with successive points being joined by straight lines and the last point joined to the first. The value `default` for shape requires that the entire enclosed area, typically an image, be used.

    > **備註：** Use the [`usemap` attribute](/zh-TW/docs/Web/HTML/Element/img#usemap) for the {{HTMLElement("img")}} element and the associated {{HTMLElement("map")}} element to define hotspots instead of the `shape` attribute.

## Examples

### Linking to an external location

```html
<!-- anchor linking to external file -->
<a href="https://www.mozilla.com/">
External Link
</a>
```

#### Result

[External Link](https://www.mozilla.com/)

### Linking to another section on the same page

```html
<!-- links to element on this page with id="attr-href" -->
<a href="#attr-href">
Description of Same-Page Links
</a>
```

#### Result

[Description of Same Page Links](#attr-href)

### Creating a clickable image

This example uses an image to link to the MDN home page. The home page will open in a new browsing context, that is, a new page or a new tab.

```html
<a href="https://developer.mozilla.org/en-US/" target="_blank">
  <img src="mdn_logo.png"
       alt="MDN logo" />
</a>
```

#### Result

{{EmbedLiveSample("Creating_a_clickable_image", "320", "64")}}

### Creating an email link

It's common to create links that open in the user's email program to allow them to send a new message. This is done with a `mailto:` link. Here's a simple example:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Result

[Send email to nowhere](mailto:nowhere@mozilla.org)

For additional details about the `mailto` URL scheme, such as including the subject, body, or other predetermined content, see [Email links](/zh-TW/docs/Web/Guide/HTML/Email_links) or {{RFC(6068)}}.

### Creating a phone link

Offering phone links is helpful for users viewing web documents and laptops connected to phones.

```html
<a href="tel:+491570156">+49 157 0156</a>
```

For additional details about the `tel` URL scheme, see {{RFC(3966)}}.

### Using the `download` attribute to save a `<canvas>` as a PNG

If you want to let users download an HTML {{HTMLElement("canvas")}} element as an image, you can create a link with a `download` attribute and the canvas data as a file URL:

```js
var link = document.createElement('a');
link.textContent = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);
```

You can see this in action at [jsfiddle.net/codepo8/V6ufG/2/](https://jsfiddle.net/codepo8/V6ufG/2/).

## Notes

HTML 3.2 defines only the `name`, `href`, `rel`, `rev`, and `title` attributes.

### Accessibility recommendations

Anchor tags are often abused with the `onclick` event to create pseudo-buttons by setting **href** to `"#"` or `"javascript:void(0)"` to prevent the page from refreshing. These values cause unexpected behavior when copying/dragging links, opening links in a new tabs/windows, bookmarking, and when JavaScript is still downloading, errors out, or is disabled. This also conveys incorrect semantics to assistive technologies (e.g., screen readers). In these cases, it is recommended to use a {{HTMLElement("button")}} instead. In general you should only use an anchor for navigation using a proper URL.

### Clicking and focus

Whether clicking on an {{HTMLElement("a")}} causes it to become focused varies by browser and OS.

| Desktop Browsers                                                                               | Windows 8.1 | OS X 10.9                     |
| ---------------------------------------------------------------------------------------------- | ----------- | ----------------------------- |
| Firefox 30.0                                                                                   | Yes         | Yes                           |
| Chrome ≥39 ([Chromium bug 388666](https://code.google.com/p/chromium/issues/detail?id=388666)) | Yes         | Yes                           |
| Safari 7.0.5                                                                                   | N/A         | Only when it has a `tabindex` |
| Internet Explorer 11                                                                           | Yes         | N/A                           |
| Presto (Opera 12)                                                                              | Yes         | Yes                           |

| Mobile Browsers | iOS 7.1.2                     | Android 4.4.4                 |
| --------------- | ----------------------------- | ----------------------------- |
| Safari Mobile   | Only when it has a `tabindex` | N/A                           |
| Chrome 35       | ???                           | Only when it has a `tabindex` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other elements conveying [text-level semantics](/zh-TW/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("abbr")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.

{{HTMLSidebar}}
