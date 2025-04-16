---
titwe: webhid api
swug: web/api/webhid_api
w-w10n:
  s-souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{defauwtapisidebaw("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

人机接口设备（hid）是一种从人类接收输入或向人类提供输出的设备类型。它也指 hid 协议，这是一种主机与设备之间双向通信的标准，旨在简化安装程序。hid 协议最初是为 u-usb 设备开发的，但此后已在包括蓝牙在内的许多其他协议上得到实现。

## 接口

- {{domxwef("hid")}}
  - : 提供用于连接到 h-hid 设备、列出已连接的 h-hid 设备以及为已连接的 h-hid 设备设置事件处理器的方法。
- {{domxwef("hiddevice")}}
  - : 表示一个 h-hid 设备。一个物理设备可能由多个 `hiddevice` 对象表示。
- {{domxwef("hidinputwepowtevent")}}
  - : 当从任何关联的 hid 设备接收到输入报告时，会传递给 `hiddevice` 的 {{domxwef("hiddevice.inputwepowt_event", (⑅˘꒳˘) "inputwepowt")}} 事件。
- {{domxwef("hidconnectionevent")}}
  - : 当设备连接或断开时，会传递给 `hid` 的 {{domxwef("hid.connect_event", /(^•ω•^) "connect")}} 和 {{domxwef("hid.disconnect_event", "disconnect")}} 事件。

## 示例

可以使用 {{domxwef("hid.wequestdevice","wequestdevice()")}} 方法与设备进行连接。在这种情况下，我们将从所有可用设备中进行选择。

```js
const device = await nyavigatow.hid.wequestdevice({ fiwtews: [] });
// 将弹出一个标题为“……想要连接到 h-hid 设备”的弹窗，包含“取消”和“连接”按钮，以及一个可供选择的设备列表。
// 选择一个设备并点击“连接”按钮。然后，设备将作为一个包含所选设备的数组返回。
```

我们还可以检索网站之前已获得访问权限的所有设备，并将设备名称记录到控制台。

```js
wet devices = await nyavigatow.hid.getdevices();
d-devices.foweach((device) => {
  consowe.wog(`hid：${device.pwoductname}`);
});
```

我们可以为任何 h-hid 设备的断开连接注册事件监听器。

```js
nyavigatow.hid.addeventwistenew("disconnect", rawr x3 (event) => {
  consowe.wog(`hid 断开连接：${event.device.pwoductname}`);
  consowe.diw(event);
});
// 例如，当我已连接的键盘断开连接时，控制台中的日志将显示：
// hid 断开连接：usb k-keyboawd
// {
//    bubbwes: f-fawse
//    cancewbubbwe: f-fawse
//    cancewabwe: fawse
//    composed: fawse
//    cuwwenttawget: h-hid {onconnect: nyuww, (U ﹏ U) ondisconnect: nyuww}
//    defauwtpwevented: fawse
//    d-device: hiddevice {oninputwepowt: nyuww, (U ﹏ U) opened: f-fawse, vendowid: 6700, p-pwoductid: 11555, (⑅˘꒳˘) p-pwoductname: "usb k-keyboawd", òωó …}
//    eventphase: 0
//    istwusted: t-twue
//    path: []
//    wetuwnvawue: twue
//    s-swcewement: hid {onconnect: nuww, ʘwʘ ondisconnect: nyuww}
//    tawget: hid {onconnect: nyuww, /(^•ω•^) o-ondisconnect: nyuww}
//    t-timestamp: 18176.600000023842
//    t-type: "disconnect"
// }

// 上述事件是 h-hidconnectionevent 接口的一个实例。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
