---
title: AmbientLightSensor：AmbientLightSensor() 构造函数
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

**`AmbientLightSensor()`** 构造函数用于创建一个新的 {{domxref("AmbientLightSensor")}} 对象，该对象可返回宿主设备周围环境光的当前光照强度（照度）值。

## 语法

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### 参数

- `options` {{optional_inline}}
  - : 当前仅支持一个选项：
    - `frequency` {{optional_inline}}
      - : 指定每秒采样的次数，即每秒触发 {{domxref('sensor.reading_event', 'reading')}} 事件的次数。该值可以是整数或小数，后者用于表示小于 1 秒的频率。实际的读取频率取决于设备硬件，因此可能低于请求的值。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 此特性的使用已被[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('sensor.reading_event', 'reading')}} 事件
