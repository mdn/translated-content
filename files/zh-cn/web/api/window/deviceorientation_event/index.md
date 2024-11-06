---
title: Window：deviceorientation 事件
slug: Web/API/Window/deviceorientation_event
---

{{APIRef}}

**`deviceorientation`** 事件在方向传感器输出新数据的时候触发。其数据系传感器与地球坐标系相比较所得，也就是说在设备上可能会采用设备地磁计的数据。

参见[有关方向与运动信息的说明](/zh-CN/docs/Web/Events/Orientation_and_motion_data_explained)。

该事件不可取消也不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法中使用事件名称，或使用事件处理器属性。

```js
addEventListener("deviceorientation", (event) => {});

ondeviceorientation = (event) => {};
```

## 事件类型

一个 {{domxref("DeviceOrientationEvent")}}。继承了 {{domxref("Event")}}。

{{InheritanceDiagram("DeviceOrientationEvent")}}

## 事件属性

- {{domxref("DeviceOrientationEvent.absolute")}} {{readonlyinline}}
  - : 一个布尔值，表示设备是否提供了方向数据。
- {{domxref("DeviceOrientationEvent.alpha")}} {{readonlyinline}}
  - : 一个数字，表示设备围绕 z 轴的转动度数，范围为 0（含）到 360（不含）。
- {{domxref("DeviceOrientationEvent.beta")}} {{readonlyinline}}
  - : 一个数字，表示设备围绕 x 轴的转动度数，范围为 -180（含）到 180（不含）。表示设备的前后运动。
- {{domxref("DeviceOrientationEvent.gamma")}} {{readonlyinline}}
  - : 一个数字，表示设备围绕 y 轴的转动度数，范围为 -90（含）到 90（不含）。表示设备的左右运动。
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{readonlyinline}}
  - : 一个数字，表示设备所得到的世界坐标系的 z 轴与正北方向的角度，范围为 0 到 360。
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{readonlyinline}}
  - : 指南针的精准度，以正/负偏差的形式给出。通常是 10。

## 示例

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    function (event) {
      // alpha: rotation around z-axis
      var rotateDegrees = event.alpha;
      // gamma: left to right
      var leftToRight = event.gamma;
      // beta: front back motion
      var frontToBack = event.beta;

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

var handleOrientationEvent = function (
  frontToBack,
  leftToRight,
  rotateDegrees,
) {
  // do something amazing
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
- [检测设备朝向](/zh-CN/docs/Web/Events/Detecting_device_orientation)
- [有关方向与运动信息的说明](/zh-CN/docs/Web/Events/Orientation_and_motion_data_explained)
