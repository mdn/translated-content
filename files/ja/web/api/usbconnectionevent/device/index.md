---
title: USBConnectionEvent.device
slug: Web/API/USBConnectionEvent/device
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBConnectionEvent")}} インターフェイスの読み取り専用プロパティ **`device`** は、接続中または切断中のデバイスを表す {{domxref("USBDevice")}} オブジェクトを返します。

## 値

{{domxref("USBDevice")}} オブジェクトです。

## 例

USB デバイスを接続すると、`connect` イベントが発火します。`event.device` を呼び出すと、接続された {{domxref("USBDevice")}} が返ります。

```js
navigator.usb.addEventListener("connect", (event) => {
  console.log(event.device);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
