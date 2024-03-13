---
title: Node.parentElement
slug: Web/API/Node/parentElement
---

{{ ApiRef() }}

返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM {{domxref("Element", "元素")}}，则返回 `null`。

## 语法

```plain
parentElement = node.parentElement
```

`parentElement` 是当前节点的父元素。它永远是一个 DOM {{domxref("Element", "元素")}} 对象，或者 `null`。

## 例子

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

## 浏览器兼容性

在一些浏览器上，`parentElement` 属性只对自身为 {{domxref("Element")}} 的节点定义，也就是说，对文本节点不定义。

{{Compat}}

## 规范

{{Specifications}}

## 参见

- {{domxref("Node.parentNode")}}
