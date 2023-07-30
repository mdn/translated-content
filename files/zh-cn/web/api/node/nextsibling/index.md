---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef}}

**`Node.nextSibling`** 是一个只读属性，返回其父节点的 {{domxref("Node.childNodes","childNodes")}} 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 `null`。

## 语法

```plain
nextNode = node.nextSibling
```

## 备注

Gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如 [`Node.firstChild`](/zh-CN/docs/Web/API/Node/firstChild) 和 [`Node.previousSibling`](/zh-CN/docs/Web/API/Node/previousSibling) 之类的方法可能会引用到一个空白符文本节点，而不是使用者所预期得到的节点。

详情请参见 [DOM 中的空白符](/zh-CN/docs/Whitespace_in_the_DOM) 和[W3C DOM 3 FAQ: 为什么一些文本节点是空的](http://www.w3.org/DOM/faq.html#emptytext).

## 示例

```html
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<br />
<output><em>Not calculated.</em></output>
```

```js
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let result = "Siblings of div-1:<br/>";

while (el) {
  result += `${i}. ${el.nodeName}<br/>`;
  el = el.nextSibling;
  i++;
}

const output = document.querySelector("output");
output.innerHTML = result;
```

{{ EmbedLiveSample("示例", "100%", 500)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Node.previousSibling")}}
