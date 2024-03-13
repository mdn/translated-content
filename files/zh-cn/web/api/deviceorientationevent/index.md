---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
---

{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

`DeviceOrientationEvent` 提供给网页开发者当设备（指手机，平板等移动设备）在浏览页面时物理旋转的信息。

> **警告：** 当前，火狐浏览器和谷歌浏览器并未能用同一种方式实现，在使用请注意。（见后文）

## 属性

- {{domxref("DeviceOrientationEvent.absolute")}} {{readonlyinline}}
  - : 用来说明设备是提供的旋转数据是否是绝对定位的布尔值。
- {{domxref("DeviceOrientationEvent.alpha")}} {{readonlyinline}}
  - : 一个表示设备绕 z 轴旋转的角度（范围在 0-360 之间）的数字
- {{domxref("DeviceOrientationEvent.beta")}} {{readonlyinline}}

  - : 一个表示设备绕 x 轴旋转（范围在－180 到 180 之间）的数字，从前到后的方向为正方向。

- {{domxref("DeviceOrientationEvent.gamma")}} {{readonlyinline}}
  - : 一个表示设备绕 y 轴旋转（范围在－90 到 90 之间）的数字，从左向右为正方向。

## 例子

```js
window.addEventListener("deviceorientation", function (event) {
  console.log(event.alpha + " : " + event.beta + " : " + event.gamma);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
- {{ domxref("DeviceMotionEvent") }}
- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
- [监测设备方向](/zh-CN/docs/WebAPI/Detecting_device_orientation)
- [转动与运动的数据说明](/zh-CN/DOM/Orientation_and_motion_data_explained)
