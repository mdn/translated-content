---
title: ReadableStream.locked
slug: Web/API/ReadableStream/locked
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Streams")}}

**`locked`** は {{domxref("ReadableStream")}} インターフェイスの読み取り専用プロパティで、読み取り可能なストリームがリーダーにロックされているかどうかを返します。

読み取り可能なストリームは、一度に最大 1 つのアクティブなリーダーを持つことができ、それが解放されるまでそのリーダーにロックされます。
リーダーは [`ReadableStream.getReader()`](/ja/docs/Web/API/ReadableStream/getReader) を使用して取得し、リーダーの `releaseLock()` メソッドを使用して解放することができます。

## 値

論理値で、読み取り可能なストリームがロックされているかどうかを示します。

## 例

```js
const stream = new ReadableStream({
  // ...
});

const reader = stream.getReader();

stream.locked
// ストリームがリーダーにロックされているため、true が返されるはずです
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
