---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
---

{{APIRef("DOM Events")}}

**`WheelEvent.deltaY`** 只读属性是一个 `double` 类型值，声明垂直滚动量以 [`WheelEvent.deltaMode`](/zh-CN/docs/Web/API/WheelEvent/deltaMode) 为单位。

## 语法

```js
var dY = event.deltaY;
```

## 例子

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [`wheel`](/zh-CN/docs/Web/API/Element/wheel_event)
- {{domxref("WheelEvent")}}
