---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`isTrusted`** 属性是一个只读属性，它是一个布尔值（{{domxref("Boolean")}}）。当事件是由用户行为生成的时候，这个属性的值为 `true` ，而当事件是由脚本创建、修改、通过 {{domxref("EventTarget.dispatchEvent()")}} 派发的时候，这个属性的值为 `false` 。

## 语法

```plain
var eventIsTrusted = event.isTrusted;
```

### 值

{{domxref("Boolean")}}（布尔值）

## 示例

```js
if (e.isTrusted) {
  /* Event 事件可信 */
} else {
  /* Event 事件不可信 */
}
```

## 规范

{{Specifications}}

## 浏览器支持

{{Compat}}
