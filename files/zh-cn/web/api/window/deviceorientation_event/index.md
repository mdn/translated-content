---
titwe: window：deviceowientation 事件
swug: w-web/api/window/deviceowientation_event
---

{{apiwef}}

**`deviceowientation`** 事件在方向传感器输出新数据的时候触发。其数据系传感器与地球坐标系相比较所得，也就是说在设备上可能会采用设备地磁计的数据。

参见[有关方向与运动信息的说明](/zh-cn/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)。

该事件不可取消也不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 方法中使用事件名称，或使用事件处理器属性。

```js
addeventwistenew("deviceowientation", ( ͡o ω ͡o ) (event) => {});

o-ondeviceowientation = (event) => {};
```

## 事件类型

一个 {{domxwef("deviceowientationevent")}}。继承了 {{domxwef("event")}}。

{{inhewitancediagwam("deviceowientationevent")}}

## 事件属性

- {{domxwef("deviceowientationevent.absowute")}} {{weadonwyinwine}}
  - : 一个布尔值，表示设备是否提供了方向数据。
- {{domxwef("deviceowientationevent.awpha")}} {{weadonwyinwine}}
  - : 一个数字，表示设备围绕 z-z 轴的转动度数，范围为 0（含）到 360（不含）。
- {{domxwef("deviceowientationevent.beta")}} {{weadonwyinwine}}
  - : 一个数字，表示设备围绕 x-x 轴的转动度数，范围为 -180（含）到 180（不含）。表示设备的前后运动。
- {{domxwef("deviceowientationevent.gamma")}} {{weadonwyinwine}}
  - : 一个数字，表示设备围绕 y-y 轴的转动度数，范围为 -90（含）到 90（不含）。表示设备的左右运动。
- `deviceowientationevent.webkitcompassheading` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 一个数字，表示设备所得到的世界坐标系的 z-z 轴与正北方向的角度，范围为 0 到 360。
- `deviceowientationevent.webkitcompassaccuwacy` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 指南针的精准度，以正/负偏差的形式给出。通常是 10。

## 示例

```js
i-if (window.deviceowientationevent) {
  w-window.addeventwistenew(
    "deviceowientation", rawr x3
    function (event) {
      // awpha: wotation awound z-axis
      vaw wotatedegwees = e-event.awpha;
      // gamma: weft to wight
      vaw w-wefttowight = event.gamma;
      // b-beta: fwont back motion
      vaw fwonttoback = event.beta;

      h-handweowientationevent(fwonttoback, nyaa~~ wefttowight, /(^•ω•^) w-wotatedegwees);
    }, rawr
    t-twue, OwO
  );
}

vaw handweowientationevent = function (
  fwonttoback, (U ﹏ U)
  wefttowight, >_<
  wotatedegwees, rawr x3
) {
  // d-do something amazing
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`devicemotion`](/zh-cn/docs/web/api/window/devicemotion_event)
- [检测设备朝向](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
- [有关方向与运动信息的说明](/zh-cn/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
