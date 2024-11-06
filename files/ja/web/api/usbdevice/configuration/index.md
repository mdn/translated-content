---
title: "USBDevice: configuration プロパティ"
slug: Web/API/USBDevice/configuration
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}

{{domxref("USBDevice")}} インターフェイスの読み取り専用プロパティ **`configuration`** は、ペアリングした USB デバイスの現在選択されているインターフェイスを表す {{domxref("USBConfiguration")}} オブジェクトを返します。

## 値

{{domxref("USBConfiguration")}} オブジェクトです。

## 例

以下の例では、インターフェイスを要求する前にコンフィギュレーションを選択するため、`USBConfiguration` プロパティの存在を確認するためにこのプロパティを使用しています。

```js
async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null) await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
