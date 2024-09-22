---
title: Element：removeAttribute() 方法
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 的 **`removeAttribute()`** 方法移除当前元素上具有指定名称的属性。

## 语法

```js-nolint
removeAttribute(attrName)
```

### 参数

- `attrName`
  - : 一个用于指定要从元素中移除的属性的名称的字符串。如果指定的属性不存在，则 `removeAttribute()` 直接返回而不会产生错误。

### 返回值

无（{{jsxref("undefined")}}）。

## 使用说明

应当使用 `removeAttribute()`，而不是直接或使用 {{domxref("Element.setAttribute", "setAttribute()")}} 将属性值设置为 `null`。对于许多属性，仅将其设为 `null` 并不会产生预期的效果。

## 示例

```js
// 给定：<div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// 现在：<div id="div1" width="200px">
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
