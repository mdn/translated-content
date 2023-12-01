---
title: "USBDevice: transferIn() メソッド"
slug: Web/API/USBDevice/transferIn
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`transferIn()`** メソッドは、USB デバイスからバルクまたはインタラプトデータを受信したら {{domxref("USBInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
transferIn(endpointNumber, length)
```

### 引数

- `endpointNumber`
  - : デバイス固有のエンドポイント (バッファー) の番号です。
- `length`
  - : デバイスから受信する最大のバイト数です。実際のデータは、解決したプロミス内の {{domxref("USBInTransferResult")}} に格納されています。

### 返値

{{domxref("USBInTransferResult")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
