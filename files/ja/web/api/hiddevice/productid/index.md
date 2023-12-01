---
title: HIDDevice.productId
slug: Web/API/HIDDevice/productId
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの読み取り専用プロパティ **`productId`** は、接続された HID デバイスのプロダクト ID を返します。

## 値

整数です。デバイスにプロダクト ID が無いか、プロダクト ID にアクセスできないときは、`0` を返します。

## 例

この例では、{{domxref("HID.getDevices()")}} でデバイスを取得し、`productId` の値をコンソールに出力します。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productId}`);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
