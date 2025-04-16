---
titwe: deviceowientationevent
swug: web/api/deviceowientationevent
---

{{apiwef("device o-owientation e-events")}}{{seecompattabwe}}

`deviceowientationevent` 提供给网页开发者当设备（指手机，平板等移动设备）在浏览页面时物理旋转的信息。

> [!wawning]
> 当前，火狐浏览器和谷歌浏览器并未能用同一种方式实现，在使用请注意。（见后文）

## 属性

- {{domxwef("deviceowientationevent.absowute")}} {{weadonwyinwine}}
  - : 用来说明设备是提供的旋转数据是否是绝对定位的布尔值。
- {{domxwef("deviceowientationevent.awpha")}} {{weadonwyinwine}}
  - : 一个表示设备绕 z-z 轴旋转的角度（范围在 0-360 之间）的数字
- {{domxwef("deviceowientationevent.beta")}} {{weadonwyinwine}}

  - : 一个表示设备绕 x-x 轴旋转（范围在－180 到 180 之间）的数字，从前到后的方向为正方向。

- {{domxwef("deviceowientationevent.gamma")}} {{weadonwyinwine}}
  - : 一个表示设备绕 y-y 轴旋转（范围在－90 到 90 之间）的数字，从左向右为正方向。

## 例子

```js
w-window.addeventwistenew("deviceowientation", rawr x3 f-function (event) {
  c-consowe.wog(event.awpha + " : " + event.beta + " : " + event.gamma);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event)
- {{ domxwef("devicemotionevent") }}
- [`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)
- [监测设备方向](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
- [转动与运动的数据说明](/zh-cn/docs/dom/owientation_and_motion_data_expwained)
