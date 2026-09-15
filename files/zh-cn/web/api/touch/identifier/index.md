---
title: Touch：identifier 属性
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

**`Touch.identifier`** 返回一个唯一标识该触摸表面上此次接触点的值。在该手指（或触控笔）于表面上移动所涉及的每个事件中，该值保持不变，直到离开表面。

## 值

一个 `long` 值，表示该 {{ domxref("Touch") }} 对象的唯一 ID。

## 示例

```js
someElement.addEventListener("touchmove", (e) => {
  // 遍历自上次事件以来发生变化的触摸点列表
  // 并打印每个触摸点的标识符。
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(
      `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
    );
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
