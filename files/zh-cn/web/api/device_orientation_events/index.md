---
title: 设备方向事件
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

设备方向事件是允许你[检测设备的方向](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation#处理方向（orientation）事件)以及允许你[检测设备的移动](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation#处理移动（motion）事件)的事件。

## 概念和用法

移动设备通常带有陀螺仪、指南针和加速计等传感器，可让设备上运行的应用程序检测设备的方向和运动。

设备方向事件允许你编写的 Web 应用程序可以根据用户设备的方向改变行为，并在用户移动设备时做出反应。

可能需要使用设备方向事件的一些典型特性包括：

- 在基于 Web 的游戏中，使用户能够通过倾斜和移动设备来控制游戏中人物或物体的运动；
- 在地图应用中，根据设备的位置调整地图方向，或提供随用户移动而更新的逐向导航；
- 用于手势识别——例如，识别“摇一摇”手势并利用它执行某些操作，如当用户摇动设备时清除输入区域。

> [!NOTE]
> 这些 API 在移动浏览器中被广泛支持。然而某些纯桌面浏览器可能会因硬件差异而受到限制，鉴于该应用程序接口主要用于配备了传感器的设备，这些限制很少有意义。

## 接口

- {{domxref("DeviceMotionEvent")}}
  - : 指示了设备加速度和旋转速率的变化。
- {{domxref("DeviceMotionEventAcceleration")}}
  - : 指示设备沿所有三个轴的加速度。
- {{domxref("DeviceMotionEventRotationRate")}}
  - : 指示设备绕所有三个轴旋转的速率。
- {{domxref("DeviceOrientationEvent")}}
  - : 代表设备物理方向的变化。

### 其他接口的扩展

- {{domxref("Window.devicemotion_event", "devicemotion")}} 事件
  - : 每隔一定时间触发一次，以显示设备当时受到的物理加速力大小以及设备的旋转速度。
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} 事件
  - : 当从设备获得设备当前方位与地球坐标框架相比较后的新数据时触发。
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} 事件
  - : 设备绝对方向发生变化时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [设备方向与运动](https://web.developers.google.cn/articles/device-orientation)，来自 web.developers.google.cn
