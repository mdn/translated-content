---
title: WheelEvent：deltaZ 属性
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent.deltaZ`** 只读属性是一个表示以 {{domxref("WheelEvent.deltaMode")}} 为单位沿 Z 轴的滚动量的 `double` 值。

## 值

数字。

## 示例

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaZ: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaZ);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
