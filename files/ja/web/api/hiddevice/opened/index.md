---
title: HIDDevice.opened
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの読み取り専用プロパティ **`opened`** は、{{domxref("HIDDevice")}} への接続が開かれていてデータを転送する準備ができているとき `true` を返します。

## 値

{{jsxref("boolean")}} 値です。接続が開かれているとき `true` です。

## 例

この例では、{{domxref("HID.getDevices()")}} でデバイスを取得し、`opened` の値をコンソールに出力します。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.opened}`);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
