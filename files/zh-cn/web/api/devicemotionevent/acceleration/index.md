---
title: DeviceMotionEvent.acceleration
slug: Web/API/DeviceMotionEvent/acceleration
---

{{ ApiRef("Device Orientation Events") }}

acceleration 属性会返回设备的加速度记录（单位：[m / s2](https://en.wikipedia.org/wiki/Meter_per_second_squared)）。

> [!NOTE]
> 如果硬件无法从 acceleration 数据中移除重力加速度，则该值在{{ domxref("DeviceMotionEvent") }}中可能并不存在，你应当使用{{ domxref("DeviceMotionEvent.accelerationIncludingGravity") }}代替

## 值

`acceleration`是一个包括三轴（x、y、z）加速度信息的对象，每个轴都有自己的属性：

- `x`
  - : 表示 x 轴（西到东）上的加速度
- `y`
  - : 表示 y 轴（南到北）上的加速度
- `z`
  - : 表示 z 轴（下到上）上的加速度

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 推荐浏览

- {{ domxref("DeviceMotionEvent.accelerationIncludingGravity") }}
- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
- {{ domxref("window.ondevicemotion") }}
- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-CN/docs/DOM/Orientation_and_motion_data_explained)
