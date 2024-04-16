---
title: Event：isTrusted 属性
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`isTrusted`** 只读属性是一个布尔值，表示事件是否由用户行为生成。当事件由用户行为触发时，为 `true`，当事件由脚本创建或修改，或通过 {{domxref("EventTarget.dispatchEvent()")}} 分发时，为 `false`。

## 值

一个布尔值。

## 示例

```js
if (e.isTrusted) {
  /* 事件可信 */
} else {
  /* 事件不可信 */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
