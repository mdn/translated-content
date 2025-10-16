---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

[Sensor API](/zh-CN/docs/Web/API/Sensor_APIs) 的 **`LinearAccelerationSensor`** 接口在每次读取时提供沿所有三个轴加到设备上的加速度（不包含重力加速度）。

要使用此传感器，用户必须通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 授予 `accelerometer` 设备传感器的权限。此外，此特性可能会被服务器设置的[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("LinearAccelerationSensor.LinearAccelerationSensor", "LinearAccelerationSensor()")}}
  - : 创建一个新的 `LinearAccelerationSensor` 对象。

## 实例属性

_从其祖先 {{domxref('Accelerometer')}}、{{domxref("Sensor")}} 和 {{domxref("EventTarget")}} 继承属性。_

## 实例方法

_`LinearAccelerationSensor` 没有自己的事件。然而，它从其父接口 {{domxref('Sensor')}} 和 {{domxref("EventTarget")}} 继承方法。_

## 事件

_`LinearAccelerationSensor` 没有自己的事件。然而，它从其父接口 {{domxref('Sensor')}} 继承事件。_

## 示例

线性加速度通常在 {{domxref('Sensor.reading_event', 'reading')}} 事件回调中读取。在下面的例子中，这种情况每秒发生 60 次。

```js
let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  console.log(`沿着 X 轴的线性加速度 ${laSensor.x}`);
  console.log(`沿着 Y 轴的线性加速度 ${laSensor.y}`);
  console.log(`沿着 Z 轴的线性加速度 ${laSensor.z}`);
});
laSensor.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
