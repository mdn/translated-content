---
title: Element：ariaValueNow 属性
slug: Web/API/Element/ariaValueNow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaValueNow`** 属性反映 [`aria-valuenow`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) 属性的值，定义范围小部件的当前值。

## 值

包含数字的字符串。

## 示例

此示例中，ID 为 `slider` 的元素上的 [`aria-valuenow`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) 属性设为 `"1"`。使用 `ariaValueNow` 将其更新为 `"2"`。

```html
<div
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
