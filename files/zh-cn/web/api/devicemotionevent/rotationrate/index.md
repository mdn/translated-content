---
title: DeviceMotionEvent.rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
---

{{ ApiRef("Device Orientation Events") }}

返回设备围绕其每个轴（x、y、z）旋转的速率（单位：度/秒）。

> **备注：** 如果设备无法提供此信息，则为 null

## 语法

```
var rates = instanceOfDeviceMotionEvent.rotationRate;
```

## 值

rotationRates 属性是一个只读对象，用于描述设备围绕其每个轴的旋转速率：

- `alpha`
  - : 设备绕其 Z 轴旋转的速率（即绕垂直于屏幕的线旋转）
- `beta`
  - : 设备绕其 X 轴旋转的速率（即从前到后旋转）
- `gamma`
  - : 设备绕其 Y 轴旋转的速率（即从一侧到另一侧）

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 推荐阅读

- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- {{ domxref("window.ondevicemotion") }}
- {{ event("deviceorientation") }}
- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/zh-CN/docs/WebAPI/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-CN/DOM/Orientation_and_motion_data_explained)
