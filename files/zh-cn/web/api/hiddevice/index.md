---
title: HIDDevice
slug: Web/API/HIDDevice
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

[WebHID API](/zh-CN/docs/Web/API/WebHID_API) 的 **`HIDDevice`** 接口表示人机接口（HID）设备。它提供了用于访问设备信息的属性，打开和关闭的方法，以及发送和接收报告的功能。

{{InheritanceDiagram}}

## 实例属性

_此接口也从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("HIDDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("boolean")}} 值，如果设备已打开连接，则为 `true`。
- {{domxref("HIDDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 HID 设备的供应商 ID。
- {{domxref("HIDDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 HID 设备的产品 ID。
- {{domxref("HIDDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个包含 HID 设备产品名称的字符串。
- {{domxref("HIDDevice.collections")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 HID 设备的报告格式数组。

### 事件

- {{domxref("HIDDevice.inputreport_event", "inputreport")}} {{Experimental_Inline}}
  - : 当设备发送报告时触发。

## 实例方法

_此接口也从其父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("HIDDevice.open()")}} {{Experimental_Inline}}
  - : 打开此 HID 设备的连接，并返回一个会在连接成功时兑现的 {{jsxref("Promise")}}。
- {{domxref("HIDDevice.close()")}} {{Experimental_Inline}}
  - : 关闭此 HID 设备的连接，并返回一个会在连接关闭时兑现的 {{jsxref("Promise")}}。
- {{domxref("HIDDevice.forget()")}} {{Experimental_Inline}}
  - : 关闭此 HID 设备的连接并重置访问权限，然后返回一个会在权限被重置时兑现的 {{jsxref("Promise")}}。
- {{domxref("HIDDevice.sendReport()")}} {{Experimental_Inline}}
  - : 向此 HID 设备发送输出报告，并返回一个会在报告发送成功时兑现的 {{jsxref("Promise")}}。
- {{domxref("HIDDevice.sendFeatureReport()")}} {{Experimental_Inline}}
  - : 向此 HID 设备发送一个特征报告，并返回一个会在报告发送成功时兑现的 {{jsxref("Promise")}}。
- {{domxref("HIDDevice.receiveFeatureReport()")}} {{Experimental_Inline}}
  - : 从 HID 设备接收一个特征报告，以 {{jsxref("Promise")}} 的形式兑现为 {{jsxref("DataView")}}。从而允许以类型化的方式访问此消息的内容。

## 示例

以下示例演示如何监听 `inputreport` 事件，该事件允许应用程序检测到 Joy-Con 右手柄设备上的哪个按钮被按下。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // 处理 Joy-Con 右手柄设备和特定的报告 ID
  if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  const value = data.getUint8(0);
  if (value === 0) return;

  const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  console.log(`用户按下了 ${someButtons[value]}。`);
});
```

在以下示例中，用 `sendFeatureReport` 使设备闪烁。

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // 关闭
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // 打开
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

你可以在文章[连接到不常见的 HID 设备](https://developer.chrome.google.cn/docs/capabilities/hid)中看到更多示例和实时演示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
