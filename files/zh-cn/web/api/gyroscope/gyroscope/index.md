---
title: Gyroscope：Gyroscope() 构造函数
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

**`Gyroscope()`** 构造函数创建一个新的 {{domxref("Gyroscope")}} 对象，它在每次读取时提供设备沿所有三个轴的角速度。

## 语法

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### 参数

- `options` {{optional_inline}}
  - : 选项如下：
    - `frequency` {{optional_inline}}
      - : 每秒采样所需的次数，即每秒调用 {{domxref('sensor.reading_event', 'reading')}} 事件的次数。可使用整数或者小数，小数用于小于一秒的频率。实际读取频率取决于设备硬件，因此可能小于所请求的。
    - `referenceFrame` {{optional_inline}}
      - : `'device'` 或 `'screen'`，默认值是 `'device'`。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 此特性的使用被[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('sensor.reading_event', 'reading')}} 事件
