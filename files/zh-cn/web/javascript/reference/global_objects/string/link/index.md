---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef}} {{deprecated_header}}

**`link()`** 方法创建一个 HTML 元素 {{HTMLElement("a")}} ，用该字符串作为超链接的显示文本，参数作为指向另一个 URL 的超链接。

## 语法

```plain
str.link(url)
```

### 参数

- `url`
  - : 任何能够指定 `a` 标签的 `href` 属性的字符串；它应当是有效的 URL（相对或绝对），任何 `&` 字符将会被转义为 `&amp;`，任何 `"` 字符将会被转义为 `&quot;`。

### 返回值

一个带有一个 HTML 元素 {{HTMLElement("a")}} 的字符串。

## 描述

使用 `link` 方法创建一个超链接 HTML 片段。返回的字符串可以通过 {{ Domxref("document.write") }} 或 {{ Domxref("element.innerHTML") }} 方法添加到文档中。

使用 `link` 方法创建的链接将会成为 document.links 数组中的元素。查看 {{ Domxref("document.links") }}。

## 示例

### 示例：使用 `link`

下例显示一个单词 "MDN" 作为超链接，指向 Mozilla Developer Network。

```js
var hotText = "MDN";
var URL = "https://developer.mozilla.org/";

document.write("Click to return to " + hotText.link(URL));
// Click to return to <a href="https://developer.mozilla.org/">MDN</a>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.anchor()")}}
