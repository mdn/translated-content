---
title: WritableStream.locked
slug: Web/API/WritableStream/locked
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("Streams")}}

**`locked`** は {{domxref("WritableStream")}} インターフェイスの読み取り専用プロパティは、 `WritableStream` がライターにロックされているかどうかを示す論理値を返します。

### 値

論理値で、書き込み可能なストリームがロックされているかどうかを示します。

## 例

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // ...
    },
    close() {
      // ...
    },
    abort(err) {
      // ...
    },
  },
  queuingStrategy,
);

// ...

const writer = writableStream.getWriter();

writableStream.locked;
// ストリームがライターにロックされているため、true を返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
