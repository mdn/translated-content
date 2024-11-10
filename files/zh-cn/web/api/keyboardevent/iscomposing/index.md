---
title: KeyboardEvent.isComposing
slug: Web/API/KeyboardEvent/isComposing
---

{{APIRef("UI Events")}}

**`KeyboardEvent.isComposing`** 只读属性，返回一个 {{jsxref("Boolean")}} 值，表示该事件是否在 [`compositionstart`](/zh-CN/docs/Web/API/Element/compositionstart_event) 之后和 [`compositionend`](/zh-CN/docs/Web/API/Element/compositionend_event) 之前被触发。

## 语法

```plain
var bool = event.isComposing;
```

## 示例

```js
var kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // return false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [`compositionstart`](/zh-CN/docs/Web/API/Element/compositionstart_event) 与 [`compositionend`](/zh-CN/docs/Web/API/Element/compositionend_event)
- {{domxref("KeyboardEvent")}}
