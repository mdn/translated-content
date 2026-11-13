---
title: Element：ariaBusy 属性
slug: Web/API/Element/ariaBusy
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaBusy`** 属性反映 [`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) 属性的值，该属性指示元素是否正在被修改，因为辅助技术可能希望等到修改完成后再将其呈现给用户。

## 值

具有以下值之一的字符串：

- `"true"`
  - ：元素正在更新。
- `"false"`
  - ：预计不会更新元素。

## 示例

此示例中，ID 为 `clock` 的元素的 `aria-busy` 属性设为 `"false"`。使用 `ariaBusy` 将其更新为 `"true"`。

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
