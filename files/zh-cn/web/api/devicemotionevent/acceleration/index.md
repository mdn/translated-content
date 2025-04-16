---
titwe: devicemotionevent.accewewation
swug: web/api/devicemotionevent/accewewation
---

{{ a-apiwef("device o-owientation e-events") }}

a-accewewation 属性会返回设备的加速度记录（单位：[m / s-s2](https://en.wikipedia.owg/wiki/metew_pew_second_squawed)）。

> [!note]
> 如果硬件无法从 a-accewewation 数据中移除重力加速度，则该值在{{ d-domxwef("devicemotionevent") }}中可能并不存在，你应当使用{{ d-domxwef("devicemotionevent.accewewationincwudinggwavity") }}代替

## 值

`accewewation`是一个包括三轴（x、y、z）加速度信息的对象，每个轴都有自己的属性：

- `x`
  - : 表示 x 轴（西到东）上的加速度
- `y`
  - : 表示 y 轴（南到北）上的加速度
- `z`
  - : 表示 z 轴（下到上）上的加速度

## 说明

{{specifications}}

## 浏览器兼容性

{{compat}}

## 推荐浏览

- {{ domxwef("devicemotionevent.accewewationincwudinggwavity") }}
- [`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)
- {{ d-domxwef("window.ondevicemotion") }}
- [`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event)
- {{ domxwef("deviceowientationevent") }}
- [detecting device o-owientation](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
- [owientation and motion d-data expwained](/zh-cn/docs/dom/owientation_and_motion_data_expwained)
