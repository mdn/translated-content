---
title: HIDDevice：forget() 方法
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
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

一个 {{jsxref("Promise")}}，会在连接关闭、设备被遗忘且权限重置时兑现为 `undefined`。

## 示例

在以下示例中，我们将连接到一个任天堂（Nintendo）Switch 的 Joy-Con 右手柄 HID 设备，使其闪烁一次，然后断开与它的连接。

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
  await new Promise((resolve) => setTimeout(resolve, 100));
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
