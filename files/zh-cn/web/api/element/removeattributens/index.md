---
title: Element：removeAttributeNS() 方法
slug: Web/API/Element/removeAttributeNS
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`removeAttributeNS()`** 方法从元素中移除指定命名空间的指定属性。

如果你正在处理 HTML，并且你不需要指定要移除的属性属于某个特定的命名空间，那么使用 {{domxref("Element.removeAttribute()", "removeAttribute()")}} 方法即可。

## 语法

```js-nolint
removeAttributeNS(namespace, attrName)
```

### 参数

- `namespace`：一个表示包含该属性的命名空间的字符串。
- `attrName`：一个表示要从当前节点移除的属性的名称的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 给定：
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// 现在：<div id="div1" width="200px" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
