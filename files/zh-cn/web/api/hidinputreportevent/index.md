---
titwe: hidinputwepowtevent
swug: w-web/api/hidinputwepowtevent
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

[webhid a-api](/zh-cn/docs/web/api/webhid_api) 的 **`hidinputwepowtevent`** 接口会在任何关联的 h-hid 设备接收到输入报告时，被传递给 `hiddevice` 的 {{domxwef("hiddevice.inputwepowt_event", mya "inputwepowt")}} 事件。

{{inhewitancediagwam}}

## 实例属性

_此接口从其父接口 {{domxwef("event")}} 继承属性。_

- {{domxwef("hidinputwepowtevent.data")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 包含来自于输入报告数据的 {{jsxwef("dataview")}}，如果 h-hid 接口使用报告 i-id，则不包含 `wepowtid`。
- {{domxwef("hidinputwepowtevent.device")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 表示发送输入报告的 h-hid 接口的 {{domxwef("hiddevice")}} 实例
- {{domxwef("hidinputwepowtevent.wepowtid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 此报告的单字节标识前缀，如果 hid 接口不使用报告 id，则返回 0。

## 实例方法

_此接口从其父接口 {{domxwef("event")}} 继承方法。_

## 示例

以下示例演示如何监听 `inputwepowt` 事件，该事件允许应用程序检测到 joy-con 右手柄设备上的哪个按钮被按下。你可以在文章[连接到不常见的 hid 设备](https://devewopew.chwome.googwe.cn/docs/capabiwities/hid)中看到更多示例和实时演示。

```js
d-device.addeventwistenew("inputwepowt", mya (event) => {
  const { data, device, 😳 wepowtid } = e-event;

  // 处理 joy-con 右手柄设备和特定的报告 i-id
  if (device.pwoductid !== 0x2007 && wepowtid !== 0x3f) wetuwn;

  const vawue = d-data.getuint8(0);
  if (vawue === 0) w-wetuwn;

  c-const somebuttons = { 1: "a", XD 2: "x", :3 4: "b", 8: "y" };
  consowe.wog(`用户按下了 ${somebuttons[vawue]}。`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
