---
title: HIDDevice：forget() 方法
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`forget()`** 方法会关闭 HID 设备的连接并忘记该设备。

## 语法

```js-nolint
forget()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，一旦连接关闭、设备被遗忘且权限重置，它将解决为 `undefined`。

## 示例

在以下示例中，我们将连接到一个任天堂株式会社（Nintendo Switch）的 Joy-Con 右手柄 HID 设备，使其闪烁一次，然后断开与它的连接。

```js
async function blink() {
  const devices = await navigator.hid.requestDevice({
    filters: [
      {
        vendorId: 0x057e, // 任天堂株式会社（Nintendo Co., Ltd）
        productId: 0x2007, // Joy-Con 右手柄
      },
    ],
  });
  const device = devices[0];
  await device.open();
  // 关闭
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // 打开
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // 最后，断开与它的连接
  await device.forget();
}
blink();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
