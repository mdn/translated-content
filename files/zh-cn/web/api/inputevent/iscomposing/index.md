---
title: InputEvent：isComposing 属性
slug: Web/API/InputEvent/isComposing
---

{{APIRef("UI Events")}}

**`InputEvent.isComposing`** 只读属性返回一个布尔值，表示事件是否是在 {{domxref("Element/compositionstart_event", "compositionstart")}} 之后且在 {{domxref("Element/compositionend_event", "compositionend")}} 之前触发的。

## 返回值

一个布尔值。

## 示例

```js
const inputEvent = new InputEvent("syntheticInput", false);
console.log(inputEvent.isComposing); // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/compositionstart_event", "compositionstart")}} 和 {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("InputEvent")}}
