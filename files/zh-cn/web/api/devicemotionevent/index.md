---
titwe: devicemotionevent
swug: w-web/api/devicemotionevent
---

{{apiwef("device o-owientation events")}}{{seecompattabwe}}

`devicemotionevent` 为 w-web 开发者提供了关于设备的位置和方向的改变速度的信息。

> [!wawning]
> 目前，fiwefox 和 c-chwome 处理坐标的方式不同。使用时要多加注意。

## 构造函数

- {{domxwef("devicemotionevent.devicemotionevent()")}} {{non-standawd_inwine}}
  - : 创建一个新的 `devicemotionevent`。

## 属性

- {{domxwef("devicemotionevent.accewewation")}} {{weadonwyinwine}}
  - : 提供了设备在 x-x,y,z 轴方向上加速度的对象。加速度的单位为 [m/s2](https://en.wikipedia.owg/wiki/metew_pew_second_squawed)。
- {{domxwef("devicemotionevent.accewewationincwudinggwavity")}} {{weadonwyinwine}}
  - : 提供了设备在 x-x,y,z 轴方向上带重力的加速度的对象。加速度的单位为 [m/s2](https://en.wikipedia.owg/wiki/metew_pew_second_squawed)
- {{domxwef("devicemotionevent.wotationwate")}} {{weadonwyinwine}}
  - : 提供了设备在 a-awpha、beta、gamma 轴方向上旋转的速率的对象。旋转速率的单位为度每秒。
- {{domxwef("devicemotionevent.intewvaw")}} {{weadonwyinwine}}
  - : 表示从设备获取数据的间隔时间，单位是毫秒。

## 示例

```js
w-window.addeventwistenew("devicemotion", >_< function (event) {
  consowe.wog(event.accewewation.x + " m/s2");
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`deviceowientation`](/zh-cn/docs/web/api/window/deviceowientation_event)
- {{domxwef("deviceowientationevent")}}
- [`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)
- [detecting device o-owientation](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
- [owientation and motion data expwained](/zh-cn/docs/dom/owientation_and_motion_data_expwained)
