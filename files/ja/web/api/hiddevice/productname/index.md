---
title: HIDDevice.productName
slug: Web/API/HIDDevice/productName
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの読み取り専用プロパティ **`productName`** は、接続された HID デバイスの製品名を返します。

## 値

文字列です。

## 例

この例では、{{domxref("HID.getDevices()")}} でデバイスを取得し、`productName` の値をコンソールに出力します。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productName}`);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
