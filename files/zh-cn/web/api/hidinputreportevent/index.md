---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

[WebHID API](/zh-CN/docs/Web/API/WebHID_API) 的 **`HIDInputReportEvent`** 接口会在任何关联的 HID 设备接收到输入报告时，被传递给 `HIDDevice` 的 {{domxref("HIDDevice.inputreport_event", "inputreport")}} 事件。

{{InheritanceDiagram}}

## 实例属性

_此接口从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 包含来自于输入报告数据的 {{jsxref("DataView")}}，如果 HID 接口使用报告 ID，则不包含 `reportId`。
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 表示发送输入报告的 HID 接口的 {{domxref("HIDDevice")}} 实例
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 此报告的单字节标识前缀，如果 HID 接口不使用报告 ID，则返回 0。

## 实例方法

_此接口从其父接口 {{domxref("Event")}} 继承方法。_

## 示例

以下示例演示如何监听 `inputreport` 事件，该事件允许应用程序检测到 Joy-Con 右手柄设备上的哪个按钮被按下。你可以在文章[连接到不常见的 HID 设备](https://developer.chrome.google.cn/docs/capabilities/hid)中看到更多示例和实时演示。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
