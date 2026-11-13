---
title: WebHID API
slug: Web/API/WebHID_API
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

人机接口设备（HID）是一种从人类接收输入或向人类提供输出的设备类型。它也指 HID 协议，这是一种主机与设备之间双向通信的标准，旨在简化安装程序。HID 协议最初是为 USB 设备开发的，但此后已在包括蓝牙在内的许多其他协议上得到实现。

## 接口

- {{domxref("HID")}}
  - : 提供用于连接到 HID 设备、列出已连接的 HID 设备以及为已连接的 HID 设备设置事件处理器的方法。
- {{domxref("HIDDevice")}}
  - : 表示一个 HID 设备。一个物理设备可能由多个 `HIDDevice` 对象表示。
- {{domxref("HIDInputReportEvent")}}
  - : 当从任何关联的 HID 设备接收到输入报告时，会传递给 `HIDDevice` 的 {{domxref("HIDDevice.inputreport_event", "inputreport")}} 事件。
- {{domxref("HIDConnectionEvent")}}
  - : 当设备连接或断开时，会传递给 `HID` 的 {{domxref("HID.connect_event", "connect")}} 和 {{domxref("HID.disconnect_event", "disconnect")}} 事件。

## 示例

可以使用 {{domxref("HID.requestDevice","requestDevice()")}} 方法与设备进行连接。在这种情况下，我们将从所有可用设备中进行选择。

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// 将弹出一个标题为“……想要连接到 HID 设备”的弹窗，包含“取消”和“连接”按钮，以及一个可供选择的设备列表。
// 选择一个设备并点击“连接”按钮。然后，设备将作为一个包含所选设备的数组返回。
```

我们还可以检索网站之前已获得访问权限的所有设备，并将设备名称记录到控制台。

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID：${device.productName}`);
});
```

我们可以为任何 HID 设备的断开连接注册事件监听器。

```js
navigator.hid.addEventListener("disconnect", (event) => {
  console.log(`HID 断开连接：${event.device.productName}`);
  console.dir(event);
});
// 例如，当我已连接的键盘断开连接时，控制台中的日志将显示：
// HID 断开连接：USB Keyboard
// {
//    bubbles: false
//    cancelBubble: false
//    cancelable: false
//    composed: false
//    currentTarget: HID {onconnect: null, ondisconnect: null}
//    defaultPrevented: false
//    device: HIDDevice {oninputreport: null, opened: false, vendorId: 6700, productId: 11555, productName: "USB Keyboard", …}
//    eventPhase: 0
//    isTrusted: true
//    path: []
//    returnValue: true
//    srcElement: HID {onconnect: null, ondisconnect: null}
//    target: HID {onconnect: null, ondisconnect: null}
//    timeStamp: 18176.600000023842
//    type: "disconnect"
// }

// 上述事件是 HIDConnectionEvent 接口的一个实例。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
