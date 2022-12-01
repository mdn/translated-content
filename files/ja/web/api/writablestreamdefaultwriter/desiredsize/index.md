---
title: WritableStreamDefaultWriter.desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("Streams")}}

**`desiredSize`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューを埋めるために必要な希望サイズを返します。

## 値

整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

値は、（エラーが発生したか、中止がキューに入れられたために）ストリームに正常に書き込むことができない場合、 `null` になり、ストリームが閉じられると `0` になります。

### 例外

- {{jsxref("TypeError")}}
  - : ライターのロックが解除されてた場合。

## 例

```js
const writableStream = new WritableStream({
  write(chunk) {
    // ...
  },
  close() {
    // ...
  },
  abort(err) {
    // ...
  }
}, queuingStrategy);

// ...

const writer = writableStream.getWriter();

// ...

// ストリームの希望サイズを返します
let size = writer.desiredSize;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
