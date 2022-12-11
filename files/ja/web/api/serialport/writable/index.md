---
title: SerialPort.writable
slug: Web/API/SerialPort/writable
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} の読み取り専用プロパティ **`writable`** は、ポートに接続されたデバイスにデータを送信する用の {{domxref("WritableStream")}} を返します。このストリームに書き込むチャンクは、{{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}} のいずれかのインスタンスでなければなりません。このプロパティは、ポートが開かれており、かつ致命的なエラーが起きていない限り、`null` にはなりません。

## 値

{{domxref("WritableStream")}} です。

## 例

この例では、ポートに文字列を送信する方法を示します。送信前に、{{domxref("TextEncoder")}} により文字列を `Uint8Array` に変換します。

```js
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(encoder.encode("PING"));
writer.releaseLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
