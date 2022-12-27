---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
---

{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

## 概要

`DeviceMotionEvent` 提供了網頁開發者關於裝置位置及旋轉方向改變時的速度資訊。

> **警告：** Currently, Firefox and Chrome does not handle the coordinates the same way. Take care about this while using them.

## 屬性

- {{domxref("DeviceMotionEvent.acceleration")}} {{readonlyinline}}
  - : An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}} {{readonlyinline}}
  - : An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{domxref("DeviceMotionEvent.rotationRate")}} {{readonlyinline}}
  - : An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is express in degrees per seconds.
- {{domxref("DeviceMotionEvent.interval")}} {{readonlyinline}}
  - : A number representing the interval of time, in milliseconds, at which data is obtained from the device.

## 範例

```js
window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{ event("deviceorientation") }}
- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- [Detecting device orientation](/zh-TW/docs/WebAPI/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-TW/DOM/Orientation_and_motion_data_explained)
