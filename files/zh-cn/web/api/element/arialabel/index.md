---
title: Element：ariaLabel 属性
slug: Web/API/Element/ariaLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaLabel`** 属性反射 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性的值。该属性用于定义标记当前元素的字符串值。

## 值

字符串或 `null`。

## 示例

在本示例中，ID 为 `close-button` 的元素上的 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性被设置为“关闭”。通过使用 `ariaLabel`，我们将该值更新为“关闭对话框”。

```html
<button aria-label="关闭" id="close-button">X</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaLabel); // “关闭”
el.ariaLabel = "关闭对话框";
console.log(el.ariaLabel); // “关闭对话框”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
