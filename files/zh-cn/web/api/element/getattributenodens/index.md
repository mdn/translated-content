---
title: Element：getAttributeNodeNS() 方法
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 2c7ff5fb33e462e72ceeab8e62dacad5a195a575
---

{{APIRef("DOM")}}

{{domxref("Element")}} 实例的 **`getAttributeNodeNS()`** 方法返回元素的指定命名空间的 {{domxref("Attr")}} 节点。

如果你需要限定命名空间的属性的[实例属性](/zh-CN/docs/Web/API/Attr#实例属性)，此方法会很有用。如果你只需要限定命名空间的属性的值，你可以改用 {{domxref("Element.getAttributeNS()", "getAttributeNS()")}} 方法。

如果你需要 HTML 文档中的元素的 {{domxref("Attr")}} 节点，并且属性没有限定命名空间，那么可以改用 {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} 方法。

## 语法

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### 参数

- `namespace`：指定属性的命名空间的字符串。
- `nodeName`：指定属性名称的字符串。

### 返回值

指定属性的节点。

## 备注

`getAttributeNodeNS` 相比 [getAttributeNode](/zh-CN/docs/Web/API/Element/getAttributeNode) 更加具体，因为它允许你指定属于特定命名空间的属性。对应的 setter 方法是 [setAttributeNodeNS](/zh-CN/docs/Web/API/Element/setAttributeNodeNS)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
