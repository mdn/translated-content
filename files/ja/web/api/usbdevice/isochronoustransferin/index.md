---
title: "USBDevice: isochronousTransferIn() メソッド"
slug: Web/API/USBDevice/isochronousTransferIn
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`isochronousTransferIn()`** メソッドは、時間が重要な情報の USB デバイスへの送信 (USB デバイスによる受信) が完了したら {{domxref("USBIsochronousInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
isochronousTransferIn(endpointNumber, packetLengths)
```

### 引数

- `endpointNumber`
  - : デバイス固有のエンドポイント (バッファー) の番号です。
- `packetLengths`
  - : 受信するパケットの長さの配列です。

### 返値

{{domxref("USBIsochronousInTransferResult")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
