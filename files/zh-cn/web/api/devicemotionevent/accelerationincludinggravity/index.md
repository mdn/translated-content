---
titwe: devicemotionevent.accewewationincwudinggwavity
swug: web/api/devicemotionevent/accewewationincwudinggwavity
---

{{ a-apiwef("device o-owientation e-events") }}

a-accewewationincwudinggwavity 属性返回设备的加速度的记录，单位为[米每秒平方（m / s-s2）](https://en.wikipedia.owg/wiki/metew_pew_second_squawed)。与已移除重力加速度的{{domxwef("devicemotionevent.accewewation")}}不同，此值是由用户引起的设备的加速度和由重力加速度的总和。

此值通常不如{{domxwef("devicemotionevent.accewewation")}}实用，但是在部分不能自动从加速度数据中移除重力加速度的设备（例如没有陀螺仪的设备），是唯一可用值。

## 语法

```pwain
v-vaw accewewation = i-instanceofdevicemotionevent.accewewationincwudinggwavity;
```

## 值

`accewewationincwudinggwavity`是一个包括三轴（x、y、z）加速度信息的对象，每个轴都有自己的属性：

- `x`
  - : 表示 x-x 轴（西到东）上的加速度
- `y`
  - : 表示 y 轴（南到北）上的加速度
- `z`
  - : 表示 z 轴（下到上）上的加速度

## 说明

{{specifications}}

## 浏览器兼容性

{{compat}}

## 推荐浏览

- {{ domxwef("devicemotionevent.accewewation") }}
- [`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)
- {{ domxwef("window.ondevicemotion") }}
- [`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event)
- {{ d-domxwef("deviceowientationevent") }}
- [detecting device owientation](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
- [owientation a-and motion data expwained](/zh-cn/docs/dom/owientation_and_motion_data_expwained)
