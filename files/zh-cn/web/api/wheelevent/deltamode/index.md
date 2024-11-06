---
title: WheelEvent：deltaMode 属性
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent.deltaMode`** 只读属性返回 `unsigned long`，表示滚动量的 delta 值的单位。允许的值为：

| 常量              | 值     | 描述                   |
| ----------------- | ------ | ---------------------- |
| `DOM_DELTA_PIXEL` | `0x00` | delta 值以像素为单位。 |
| `DOM_DELTA_LINE`  | `0x01` | delta 值以行为单位。   |
| `DOM_DELTA_PAGE`  | `0x02` | delta 值以页为单位。   |

## 值

`unsigned long`。

## 示例

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaMode);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
