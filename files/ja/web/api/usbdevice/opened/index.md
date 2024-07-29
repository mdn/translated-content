---
title: "USBDevice: opened プロパティ"
slug: Web/API/USBDevice/opened
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}

{{domxref("USBDevice")}} インターフェイスの読み取り専用プロパティ **`opened`** は、ペアリングした USB デバイスとのセッションが開始しているかを表します。デバイスは、ウェブページから制御する前に開かれなければなりません。

## 値

{{jsxref("boolean")}} です。

## 例

この例では、複数の色がある LED を搭載した仮想の USB デバイスを扱います。この例は、{{domxref("USBDevice.controlTransferOut")}} を呼び出して LED の色を設定する前にデバイスが開かれているかを確認する方法を示します。

> [!NOTE]
> USB デバイスにどのようなデータを渡すか、そしてどのようにそれを渡すかは、各デバイスに固有で独特です。

```js
async function setDeviceColor(usbDevice, r, g, b) {
  if (device.opened) {
    // この仮想 USB デバイスに渡すデータは Uint8Array でなければならない
    const payload = new Uint8Array([r, g, b]);

    await usbDevice.controlTransferOut(
      {
        requestType: "vendor",
        recipient: "device",
        request: 1,
        value: 0,
        index: 0,
      },
      payload,
    );
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
