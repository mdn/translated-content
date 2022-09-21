---
title: KeyboardEvent.isComposing
slug: Web/API/KeyboardEvent/isComposing
---

{{APIRef("DOM Events")}}

**`KeyboardEvent.isComposing`** 只读属性，返回一个 {{jsxref("Boolean")}} 值，表示该事件是否在 {{event("compositionstart")}} 之后和 {{event("compositionend")}} 之前被触发。

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

- {{ event("compositionstart") }} 与 {{ event("compositionend")}}
- {{domxref("KeyboardEvent")}}
