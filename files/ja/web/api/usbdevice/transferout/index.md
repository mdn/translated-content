---
title: "USBDevice: transferOut() メソッド"
slug: Web/API/USBDevice/transferOut
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`transferOut()`** メソッドは、USB デバイスにバルクまたはインタラプトデータを送信したら {{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
transferOut(endpointNumber, data)
```

### 引数

- `endpointNumber`
  - : デバイス固有のエンドポイント (バッファー) の番号です。
- `data`
  - : デバイスに送信するデータが格納された {{jsxref("TypedArray")}} です。

### 返値

{{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
