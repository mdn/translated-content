---
title: Gyroscope：z 属性
slug: Web/API/Gyroscope/z
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

{{domxref("Gyroscope")}} 接口的 **`z`** 只读属性返回一个数字表示设备沿着 Z 轴的角速度。

## 值

一个 {{jsxref('Number')}}。

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
