---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

**`AmbientLightSensor`** 接口（属于[传感器 API](/zh-CN/docs/Web/API/Sensor_APIs)）可返回宿主设备周围环境光的当前光照强度值。

要使用该传感器，用户必须通过[权限 API](/zh-CN/docs/Web/API/Permissions_API) 授予 `'ambient-light-sensor'` 设备传感器的访问权限。

此特性可能会受到服务器设置的[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)限制。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}} {{Experimental_Inline}}
  - : 创建一个新的 `AmbientLightSensor` 对象。

## 实例属性

- {{domxref('AmbientLightSensor.illuminance')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回宿主设备周围环境光照强度的当前值（单位为[勒克斯](https://zh.wikipedia.org/wiki/勒克斯)）。

## 实例方法

_`AmbientLightSensor` 本身不包含专有方法，但会继承其父接口 {{domxref("Sensor")}} 和 {{domxref("EventTarget")}} 的方法。_

## 事件

_`AmbientLightSensor` 本身不提供专属事件，但会继承其父接口 {{domxref('Sensor')}} 的事件。_

## 示例

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("当前光照强度值：", sensor.illuminance);
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
