---
title: LinearAccelerationSensor：LinearAccelerationSensor() 构造函数
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

**`LinearAccelerationSensor()`** 构造函数创建一个新的 {{domxref("LinearAccelerationSensor")}} 对象，它在每次读取时提供沿所有三个轴加到设备上的加速度（不包含重力加速度）。

## 语法

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### 参数

- `options` {{optional_inline}}
  - : 选项如下：
    - `frequency` {{optional_inline}}
      - : 每秒采样所需的次数，即每秒调用 {{domxref('sensor.reading_event', 'reading')}} 事件的次数。可使用整数或者小数，小数用于小于一秒的频率。实际读取频率取决于设备硬件，因此可能小于所请求的频率。
    - `referenceFrame` {{optional_inline}}
      - : `“device”` 或 `“screen”`，默认值是 `“device”`。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 此特性的使用被[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('sensor.reading_event', 'reading')}} 事件
