---
title: USB.getDevices()
slug: Web/API/USB/getDevices
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

{{DOMxRef("USB")}} インターフェイスの **`getDevices`** メソッドは、接続されたペア設定済みのデバイスを表す {{domxref("USBDevice")}} の配列で解決する {{jsxref("Promise")}} を返します｡デバイスのペア設定については、{{DOMxRef("USB.requestDevice()")}} を参照してください。

## 構文

```js-nolint
getDevices()
```

### 引数

なし

### 返値

{{DOMxRef("USBDevice")}} オブジェクトの配列で解決する {{JSxRef("Promise")}} です。

## 例

以下の例では、ペア設定済みのデバイスの製品名とシリアル番号をコンソールに出力します。デバイスのペア設定については、{{DOMxRef("USB.requestDevice","USB.requestDevice()")}} を参照してください。

```js
navigator.usb.getDevices().then((devices) => {
  console.log(`デバイス数: ${devices.length}`);
  devices.forEach((device) => {
    console.log(
      `製品名: ${device.productName} シリアル番号 ${device.serialNumber}`,
    );
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
