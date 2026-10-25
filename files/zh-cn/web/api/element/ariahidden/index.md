---
title: Element：ariaHidden 属性
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaHidden`** 属性反映了 [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性的值，该属性指示元素是否暴露给无障碍 API。

## 值

具有以下值之一的字符串：

- `"true"`
  - : 该元素对无障碍 API 隐藏。
- `"false"`
  - : 该元素像已被渲染那样暴露给无障碍 API。
- `"undefined"`
  - : 该元素的隐藏状态由用户代理根据其是否被渲染来决定。

## 示例

在此示例中，ID 为 `hidden` 的元素上的 `aria-hidden` 属性被设置为 `"true"`。通过 `ariaHidden`，我们将它的值更新为 `"false"`。

```html
<div id="hidden" aria-hidden="true">Some things are better left unsaid.</div>
```

```js
let el = document.getElementById("hidden");
console.log(el.ariaHidden); // true
el.ariaHidden = "false";
console.log(el.ariaHidden); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
