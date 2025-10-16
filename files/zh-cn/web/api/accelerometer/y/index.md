---
title: Accelerometer：y 属性
slug: Web/API/Accelerometer/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("Accelerometer")}} 接口的 **`y`** 只读属性返回设备沿其 y 轴的加速度的数字。

## 值

一个 {{jsxref('Number')}}。

## 示例

通常在 {{domxref('Sensor.reading_event', 'reading')}} 事件回调中读取加速度。以下示例每秒读取六十次。

```js
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", (e) => {
  console.log(`沿 X 轴的加速度 ${accelerometer.x}`);
  console.log(`沿 Y 轴的加速度 ${accelerometer.y}`);
  console.log(`沿 Z 轴的加速度 ${accelerometer.z}`);
});
accelerometer.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
