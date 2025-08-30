---
title: AbsoluteOrientationSensor：AbsoluteOrientationSensor() 构造函数
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

**`AbsoluteOrientationSensor()`** 构造函数创建一个描述设备相对于地球参考坐标系的物理方向的新 {{domxref("AbsoluteOrientationSensor")}} 对象。

## 语法

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### 参数

- `options` {{optional_inline}}
  - : 选项如下：
    - `frequency` {{optional_inline}}
      - : 每秒采样的期望次数，即每秒触发 {{domxref('sensor.reading_event', 'reading')}} 事件的次数。可以使用整数或小数（用于频率小于一秒的情况）。实际读取频率取决于设备硬件，因此可能低于请求值。
    - `referenceFrame` {{optional_inline}}
      - : 可以是 `'device'` 或 `'screen'`。默认为 `'device'`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('sensor.reading_event', 'reading')}} 事件
