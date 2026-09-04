---
title: AmbientLightSensor：illuminance 属性
short-title: illuminance
slug: Web/API/AmbientLightSensor/illuminance
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("AmbientLightSensor")}} 接口的 **`illuminance`** 只读属性返回宿主设备周围环境光的当前光照强度，单位为 [lux（勒克斯）](https://zh.wikipedia.org/wiki/勒克斯)。

## 值

一个 {{jsxref('Number')}}，表示当前的光照强度，单位为勒克斯（lux）。

## 示例

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("当前光照强度：", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
