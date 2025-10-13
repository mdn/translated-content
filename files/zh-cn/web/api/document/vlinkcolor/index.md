---
title: Document：vlinkColor 属性
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}} {{Deprecated_Header}}

**`Document.vlinkColor`** 属性用于获取或设置文档中用户已访问链接的颜色。

## 值

表示颜色的单词（例如 `"red"`）或十六进制值（例如 `"#ff0000"`）的字符串。

当设置为 `null` 值时，该 `null` 值会被转换为空字符串 (`""`)，因此 `document.vlinkColor = null` 等同于 `document.vlinkColor = ""`。

## 备注

- 在 Mozilla Firefox 中，此属性的默认值为紫色（十六进制为 `#551a8b`）。
- `Document.vlinkColor` 在 [HTML 规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-vlinkcolor)中已被弃用。
- 推荐的替代方法是通过 CSS {{Cssxref(":visited")}} 伪类来获取/设置 HTML {{HtmlElement("a")}} 元素的颜色（例如 `a:visited {color:red;}`）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
