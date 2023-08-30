---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{ ApiRef("DOM") }}

创建一个新的空白的文档片段 ( [`DocumentFragment`](/zh-CN/docs/DOM/DocumentFragment))。

## 语法

```plain
let fragment = document.createDocumentFragment();
```

`fragment` 是一个指向空{{domxref("DocumentFragment")}}对象的引用。

## 描述

[`DocumentFragments`](/zh-CN/docs/DOM/DocumentFragment) 是 DOM 节点。它们不是主 DOM 树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到 DOM 树。在 DOM 树中，文档片段被其所有的子元素所代替。

因为文档片段存在于**内存中**，并不在 DOM 树中，所以将子元素插入到文档片段时不会引起页面[回流](/zh-CN/docs/Glossary/Reflow)（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

## 示例

此示例创建主流 Web 浏览器的列表。

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
var element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### 结果

{{EmbedLiveSample("示例", 600, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
