---
title: Gyroscope
slug: Web/API/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

[Sensor API](/zh-CN/docs/Web/API/Sensor_APIs) 的 **`Gyroscope`** 接口在每次读取时提供设备沿所有三个轴的角速度。

要使用此传感器，用户必须通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 授予 `'gyroscope'` 设备传感器的权限。此外，此特性可能会被服务器上设置的[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}
  - : 创建一个新的 `Gyroscope` 对象。

## 实例属性

- {{domxref('Gyroscope.x')}} {{ReadOnlyInline}}
  - : 返回一个双精度浮点数，包含设备沿 x 轴的角速度。
- {{domxref('Gyroscope.y')}} {{ReadOnlyInline}}
  - : 返回一个双精度浮点数，包含设备沿 y 轴的角速度。
- {{domxref('Gyroscope.z')}} {{ReadOnlyInline}}
  - : 返回一个双精度浮点数，包含设备沿 z 轴的角速度。

## 实例方法

_`Gyroscope` 没有自己的方法。然而，它从其父接口 {{domxref("Sensor")}} 和 {{domxref("EventTarget")}} 继承方法。_

## 事件

_`Gyroscope` 没有自己的事件。然而，它从其父接口 {{domxref('Sensor')}} 继承事件。_

## 示例

陀螺仪通常在 {{domxref('Sensor.reading_event', 'reading')}} 事件回调中读取。在下面的例子中，这种情况每秒发生 60 次。

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`沿着 X 轴的角速度 ${gyroscope.x}`);
  console.log(`沿着 Y 轴的角速度 ${gyroscope.y}`);
  console.log(`沿着 Z 轴的角速度 ${gyroscope.z}`);
});
gyroscope.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
