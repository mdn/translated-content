---
title: DeviceMotionEvent.accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
---

{{ ApiRef("Device Orientation Events") }}

accelerationIncludingGravity 属性返回设备的加速度的记录，单位为[米每秒平方（m / s2）](https://en.wikipedia.org/wiki/Meter_per_second_squared)。与已移除重力加速度的{{domxref("DeviceMotionEvent.acceleration")}}不同，此值是由用户引起的设备的加速度和由重力加速度的总和。

此值通常不如{{domxref("DeviceMotionEvent.acceleration")}}实用，但是在部分不能自动从加速度数据中移除重力加速度的设备（例如没有陀螺仪的设备），是唯一可用值。

## 语法

```plain
var acceleration = instanceOfDeviceMotionEvent.accelerationIncludingGravity;
```

## 值

`accelerationIncludingGravity`是一个包括三轴（x、y、z）加速度信息的对象，每个轴都有自己的属性：

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

- {{ domxref("DeviceMotionEvent.acceleration") }}
- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
- {{ domxref("window.ondevicemotion") }}
- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-CN/docs/DOM/Orientation_and_motion_data_explained)
