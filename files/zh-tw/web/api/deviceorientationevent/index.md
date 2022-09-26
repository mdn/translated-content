---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
---

{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

`DeviceOrientationEvent` 提供了網頁開發者關於目前瀏覽頁面之裝置的物理旋轉方向資訊。

> **警告：** Currently, Firefox and Chrome do not handle the coordinates the same way. Take care about this while using them.

## 屬性

- {{domxref("DeviceOrientationEvent.absolute")}} {{readonlyinline}}
  - : A boolean that indicates whether or not the device is providing orientation data absolutely.
- {{domxref("DeviceOrientationEvent.alpha")}} {{readonlyinline}}
  - : A number representing the motion of the device around the z axis, express in degrees with values ranging from 0 to 360
- {{domxref("DeviceOrientationEvent.beta")}} {{readonlyinline}}
  - : A number representing the motion of the device around the x axis, express in degrees with values ranging from -180 to 180. This represents a front to back motion of the device.
- {{domxref("DeviceOrientationEvent.gamma")}} {{readonlyinline}}
  - : A number representing the motion of the device around the y axis, express in degrees with values ranging from -90 to 90. This represents a left to right motion of the device.

## 範例

```js
window.addEventListener('deviceorientation', function(event) {
  console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
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
