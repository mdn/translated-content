---
title: HIDDevice：inputreport 事件
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`inputreport`** 事件在从 HID 设备接收新报告时会触发。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("inputreport", (event) => {});

oninputreport = (event) => {};
```

## 事件类型

一个 {{domxref("HIDInputReportEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("HIDInputReportEvent")}}

## 事件属性

_此接口也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("DataView")}}，包含输入报告中的数据，如果 HID 接口使用报告 ID，则不包括 `reportId`。
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}}
  - : 表示发送输入报告的 HID 接口的 {{domxref("HIDDevice")}} 实例。
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}}
  - : 此报告的单字节标识前缀，如果 HID 接口不使用报告 ID，则为 `0`。

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
