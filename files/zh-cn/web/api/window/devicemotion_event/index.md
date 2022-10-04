---
title: Window.ondevicemotion
slug: Web/API/Window/devicemotion_event
---

{{ ApiRef() }}

## 摘要

一个发送到窗口的{{ event("devicemotion")}}事件处理程序。

## 语法

```plain
window.ondevicemotion = funcRef;
```

Where `funcRef` is a reference to a function. This function receives a {{ domxref("DeviceMotionEvent") }} object describing the motion that occurred.

这里的`funcRef`是一个函数的引用。这个函数接收一个{{ domxref("DeviceMotionEvent") }} 对象类型的参数描述发生的动作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{ event("devicemotion") }}
- {{ domxref("DeviceMotionEvent") }}
- [Detecting device orientation](/zh-CN/Detecting_device_orientation)
