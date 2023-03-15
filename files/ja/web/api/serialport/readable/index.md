---
title: SerialPort.readable
slug: Web/API/SerialPort/readable
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} の読み取り専用プロパティ **`readable`** は、ポートに接続されたデバイスからデータを受信する用の {{domxref("ReadableStream")}} を返します。このストリームから読み出せるチャンクは、{{jsxref("Uint8Array")}} のインスタンスです。このプロパティは、ポートが開かれており、かつ致命的なエラーが起きていない限り、`null` にはなりません。

## 値

{{domxref("ReadableStream")}} です。

## 例

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して `readable` が `null` になるまで新しい `reader` を生成し続けることで、致命的でないエラーを処理します。

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| がキャンセルされました。
        break;
      }
      // |value| について何かをする
    }
  } catch (error) {
    // |error| を処理する
  } finally {
    reader.releaseLock();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
