---
title: Element：getAttributeNode() 方法
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

返回当前元素的指定属性（以 {{domxref("Attr")}} 节点形式）。

如果你需要该属性的[实例属性](/zh-CN/docs/Web/API/Attr#实例属性)，则此方法会很有用。如果你只需要属性的值，你可以改用 {{domxref("Element.getAttribute()", "getAttribute()")}} 方法。

## 语法

```js-nolint
getAttributeNode(attrName)
```

### 参数

- `attrName`：一个包含属性名称的字符串。

### 返回值

表示属性的 `Attr` 节点。

## 示例

```js
// html：<div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## 备注

当在一个被标记为 HTML 文档的 DOM 中的 HTML 元素上调用该方法时，`getAttributeNode` 会在处理之前将其参数转换为小写。

`Attr` 节点继承自 `Node`，但不被认为是文档树的一部分。`Node` 上定义的常用属性，如 [parentNode](/zh-CN/docs/Web/API/Node/parentNode)、[previousSibling](/zh-CN/docs/Web/API/Node/previousSibling) 和 [nextSibling](/zh-CN/docs/Web/API/Node/nextSibling) 对于 `Attr` 节点来说都为 `null`。然而，你可以使用 `ownerElement` 来得到拥有这个属性的元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
