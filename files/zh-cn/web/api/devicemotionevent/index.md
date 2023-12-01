---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
---

{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

`DeviceMotionEvent` 为 web 开发者提供了关于设备的位置和方向的改变速度的信息。

> **警告：** 目前，Firefox 和 Chrome 处理坐标的方式不同。使用时要多加注意。

## 构造函数

- {{DOMxRef("DeviceMotionEvent.DeviceMotionEvent()")}} {{Non-standard_Inline}}
  - : 创建一个新的 `DeviceMotionEvent`。

## 属性

- {{domxref("DeviceMotionEvent.acceleration")}} {{readonlyinline}}
  - : 提供了设备在 X,Y,Z 轴方向上加速度的对象。加速度的单位为 [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared)。
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}} {{readonlyinline}}
  - : 提供了设备在 X,Y,Z 轴方向上带重力的加速度的对象。加速度的单位为 [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared)
- {{domxref("DeviceMotionEvent.rotationRate")}} {{readonlyinline}}
  - : 提供了设备在 alpha、beta、gamma 轴方向上旋转的速率的对象。旋转速率的单位为度每秒。
- {{domxref("DeviceMotionEvent.interval")}} {{readonlyinline}}
  - : 表示从设备获取数据的间隔时间，单位是毫秒。

## 示例

```js
window.addEventListener("devicemotion", function (event) {
  console.log(event.acceleration.x + " m/s2");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
- {{DOMxRef("DeviceOrientationEvent")}}
- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
- [Detecting device orientation](/zh-CN/docs/WebAPI/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-CN/DOM/Orientation_and_motion_data_explained)
