---
title: Window：devicemotion 事件
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`devicemotion`** 事件每隔一定时间触发一次，显示设备当时在包括/不包括重力的作用下的加速度大小。如果有的话，它还会提供有关旋转速率的信息。

该事件不可取消，也不会冒泡。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("devicemotion", (event) => {});

ondevicemotion = (event) => {};
```

## 事件类型

一个 {{domxref("DeviceMotionEvent")}}，继承于 {{domxref("Event")}}。

{{InheritanceDiagram("DeviceMotionEvent")}}

## 事件属性

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : 给出设备在 x、y、z 三轴上的加速度。加速度用 [m/s²](https://zh.wikipedia.org/wiki/米每二次方秒) 表示。
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : 在重力作用下，给出设备在 x、y、z 三个轴上的加速度的对象。加速度单位为 [m/s²](https://zh.wikipedia.org/wiki/米每二次方秒)。
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : 一个给出设备绕三个方向轴（阿尔法轴、贝塔轴和伽马轴）的旋转速率的对象。旋转速率以度每秒表示。
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : 代表从设备获取数据的时间间隔（毫秒）的数字。

## 示例

```js
function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // 做点有意思的事情。
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
- [DeviceOrientation 事件](https://www.w3.org/TR/orientation-event/#devicemotion)
