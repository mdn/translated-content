---
title: Element：firstElementChild 属性
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("DOM") }}

**`Element.firstElementChild`** 只读属性返回元素的第一个子{{domxref("Element", "元素", "", 1)}}，如果没有子元素，则为 `null`。

`Element.firstElementChild` 仅包含元素节点。要获取所有子节点（包括文本和注释节点等非元素节点），请使用 {{domxref("Node.firstChild")}}。

## 值

一个 {{domxref("Element")}} 对象，或 `null`。

## 示例

```html
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>
```

```js
const list = document.getElementById("list");
console.log(list.firstElementChild.textContent);
// 输出 "First (1)"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Element.lastElementChild")}}
