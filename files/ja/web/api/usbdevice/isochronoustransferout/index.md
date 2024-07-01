---
title: "USBDevice: isochronousTransferOut() メソッド"
slug: Web/API/USBDevice/isochronousTransferOut
l10n:
  sourceCommit: 2d56200e7f273405a9f97226c503787dfb020d44
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`isochronousTransferOut()`** メソッドは、時間が重要な情報の USB デバイスからの転送が完了したら {{domxref("USBIsochronousOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
isochronousTransferOut(endpointNumber, data, packetLengths)
```

### 引数

- `endpointNumber`
  - : デバイス固有のエンドポイント (バッファー) の番号です。
- `data`
  - : デバイスに送信するデータが格納された {{jsxref("TypedArray")}} です。
- `packetLengths`
  - : 送信するパケットの長さの配列です。

### 返値

{{domxref("USBIsochronousOutTransferResult")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
