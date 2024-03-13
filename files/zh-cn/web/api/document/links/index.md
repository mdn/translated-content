---
title: Document.links
slug: Web/API/Document/links
---

{{APIRef("DOM")}}

`links` 属性返回一个文档中所有具有 href 属性值的 {{HTMLElement("area")}} 元素与 {{HTMLElement("a")}} 元素的集合。

### 语法

```plain
nodeList = document.links
```

### 返回值

一个 {{domxref("HTMLCollection")}}。

### 示例

```js
var links = document.links;
for (var i = 0; i < links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

### 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
