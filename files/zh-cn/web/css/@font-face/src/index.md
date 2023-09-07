---
title: src
slug: Web/CSS/@font-face/src
---

{{CSSRef}}

{{cssxref("@font-face")}} 中的 src 描述符指定了包含字体数据的资源。`@font-face` 规则中需要指定这个属性。

它的值是一个有优先级的，以逗号分割的外部引用或者本地安装的字体名称。当需要使用字体时，用户代理（指浏览器的意思）将会使用以逗号分隔的参考集中能成功激活的第一个参考值。如果是包含无效数据的字体或者本地的字体资源不存在，用户代理将会忽略当前字体并且加载下一个字体。

与 CSS 中的其他 URL 一样，URL 可以是相对的，在这种情况下，它相对于包含 @ font-face 规则的样式表的位置进行解析。对于 SVG 字体，URL 指向文档中定义的包含 SVG 字体的元素。如果省略元素引用，则默认引用第一个定义字体。同样，字体容器只加载`@font-face` 规则给定的其中一种字体。片段标识符用于指示要加载的字体。如果容器格式缺少定义的片段标识符方案，将会使用一个简单的基于 1 的索引方案（e.g., "font-collection#1" for the first font, "font-collection#2" for the second font, etc.）

{{cssinfo}}

## Syntax

```css
/* <url> values */
src: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */
src: url(path/to/font.woff); /* Relative URL */
src: url(path/to/font.woff) format("woff"); /* Explicit format */
src: url("path/to/font.woff"); /* Quoted URL */
src: url(path/to/svgfont.svg#example); /* Fragment identifying font */

/* <font-face-name> values */
src: local(font); /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font"); /* Quoted name */

/* Multiple items */
src:
  local(font),
  url(path/to/font.svg) format("svg"),
  url(path/to/font.woff) format("woff"),
  url(path/to/font.otf) format("opentype");
```

### Values

- `<url> [ format( <string># ) ]?`

  - : Specifies an external reference consisting of a {{cssxref("&lt;url&gt;")}}, followed by an optional hint using the&#x20;

    `format()`

    &#x20;function to describe the format of the font resource referenced by that URL. The format hint contains a comma-separated list of format strings that denote well-known font formats. If a user agent doesn't support the specified formats, it skips downloading the font resource. If no format hints are supplied, the font resource is always downloaded.

- `<font-face-name>`

  - : Specifies the name of a locally-installed font face using the&#x20;

    `local()`

    &#x20;function, which uniquely identifies a single font face within a larger family. The name can optionally be enclosed in quotes.

### Formal syntax

{{csssyntax}}

## Examples

```css
@font-face {
  font-family: examplefont;
  src:
    local(Example Font),
    url("examplefont.woff") format("woff"),
    url("examplefont.otf") format("opentype");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
