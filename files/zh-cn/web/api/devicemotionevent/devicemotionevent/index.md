---
title: DeviceMotionEvent.DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
---

{{APIRef("Device Orientation Events")}}{{Non-standard_header}}

The **`DeviceMotionEvent`** constructor 会创建一个新的 {{DOMxRef("DeviceMotionEvent")}}.

## 语法

```js-nolint
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### 参数

- `type`
  - : 必须是 `"devicemotion"`.
- `options`{{Optional_Inline}}
  - : 可选项如下：
    - `acceleration`: 一个对象，包含设备在 X，Y 和 Z 三个轴线上的加速度。加速度的单位为[m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `accelerationIncludingGravity`: 一个对象，包含设备在 X，Y 和 Z 三个轴线上，重力作用下的加速度。加速度的单位为[m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `rotationRate`: 一个对象，包含设备的定向在三个定向轴 alpha, beta 和 gamma 上的偏移比率。偏移比率的单位是每秒偏移的角度。
    - `interval`: 时间间隔，单位毫秒，表示设备获取数据的间隔时间。

## 说明

无特别说明。

## 浏览器兼容性

{{Compat}}
