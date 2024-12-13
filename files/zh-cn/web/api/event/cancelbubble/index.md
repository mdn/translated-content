---
title: Event：cancelBubble 属性
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`cancelBubble`** 属性已被弃用。请使用 {{domxref("Event.stopPropagation()")}} 代替。在事件处理器返回之前将其值设置为 `true` 可以阻止事件的传播。在后续的实现中，将其设置为 `false` 不会产生任何效果。请参阅[浏览器兼容性](#浏览器兼容性)了解详细信息。

## 值

布尔值。值为 `true` 表示事件不得继续传播。

## 示例

```js
elem.onclick = (event) => {
  // 在这里做一些很酷的事情
  event.cancelBubble = true;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
