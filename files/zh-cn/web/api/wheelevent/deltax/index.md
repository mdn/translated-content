---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
---

{{APIRef("DOM Events")}}

**`WheelEvent.deltaX`** 只读属性是一个 `double` 类型值，声明水平滚动量以{{domxref("WheelEvent.deltaMode")}} 为单位。

## 语法

```plain
var dX = event.deltaX;
```

## 例子

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [`wheel`](/zh-CN/docs/Web/API/Element/wheel_event)
- {{domxref("WheelEvent")}}
