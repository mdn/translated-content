---
title: DeviceOrientationEvent.absolute
slug: Web/API/DeviceOrientationEvent/absolute
---

{{ apiref("Device Orientation Events") }}

表示该设备是否提供绝对定位数据 (这个数据是关于地球的坐标系) 或者使用了由设备决定的专门的坐标系。查看更多关于 [Orientation and motion data explained](/zh-CN/docs/DOM/Orientation_and_motion_data_explained) 的细节。

## 语法

```plain
var absolute = instanceOfDeviceOrientationEvent.absolute;
```

如果方向数据跟地球坐标系和设备坐标系有差异，则`absolute`为`true`，如果方向数据由设备本身的坐标系提供，则`absolute`为`false`。

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/zh-CN/Detecting_device_orientation)
- [Orientation and motion data explained](/zh-CN/docs/DOM/Orientation_and_motion_data_explained)
- {{ domxref("window.ondeviceorientation") }}
- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
