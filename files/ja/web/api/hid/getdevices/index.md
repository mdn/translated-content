---
title: HID.getDevices()
slug: Web/API/HID/getDevices
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HID")}} インターフェイスの **`getDevices()`** メソッドは、ユーザーがこれまでに {{domxref("HID.requestDevice","requestDevice()")}} の呼び出しに応じてアクセスを許可した接続中の HID デバイスのリストを取得します。

## 構文

```js-nolint
getDevices()
```

### 引数

なし。

### 返値

{{domxref("HIDDevice")}} オブジェクトのリストで解決する {{jsxref("Promise")}} を返します。

## 例

この例では、デバイスのリストを取得し、デバイス名をコンソールに出力します。

```js
document.addEventListener('DOMContentLoaded', async () => {
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
