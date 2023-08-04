---
title: WheelEvent.deltaMode
slug: Web/API/WheelEvent/deltaMode
---

{{APIRef("DOM Events")}}

**`WheelEvent.deltaMode`** 只读属性返回一个 `unsigned long` 类型的值，声明 delta 的滚动值的单位。可能的值为：

| Constant          | Value  | Description              |
| ----------------- | ------ | ------------------------ |
| `DOM_DELTA_PIXEL` | `0x00` | delta 的值为 像素 级别。 |
| `DOM_DELTA_LINE`  | `0x01` | delta 的值为 行 级别。   |
| `DOM_DELTA_PAGE`  | `0x02` | delta 的值为 页 级别。   |

## 语法

```
var unit = event.deltaMode;
```

## 例子

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaMode);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [`wheel`](/zh-CN/docs/Web/API/Element/wheel_event)
- {{domxref("WheelEvent")}}
