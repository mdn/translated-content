---
title: HIDDevice.vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの読み取り専用プロパティ **`vendorId`** は、接続された HID デバイスのベンダー ID を返します。これにより、デバイスの製造元を識別します。

## 値

整数です。デバイスにベンダー ID が無いか、ベンダー ID にアクセスできないときは、`0` を返します。

## 例

この例では、{{domxref("HID.getDevices()")}} でデバイスを取得し、`vendorId` の値をコンソールに出力します。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.vendorId}`);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
