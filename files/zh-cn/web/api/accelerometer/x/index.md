---
title: Accelerometer：x 属性
slug: Web/API/Accelerometer/x
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("Accelerometer")}} 接口的 **`x`** 只读属性返回设备沿其 x 轴的加速度的数字。

## 值

一个 {{jsxref('Number')}}。

## 示例

通常在 {{domxref('Sensor.reading_event', 'reading')}} 事件回调中读取加速度。以下示例每秒读取六十次。

```js
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", (e) => {
  console.log(`沿 X 轴上的加速度 ${accelerometer.x}`);
  console.log(`沿 Y 轴上的加速度 ${accelerometer.y}`);
  console.log(`沿 Z 轴上的加速度 ${accelerometer.z}`);
});
accelerometer.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
