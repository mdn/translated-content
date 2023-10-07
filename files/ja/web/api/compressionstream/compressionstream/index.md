---
title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 3a8ddeac2f0957b775b1c6c237f565b266c274c0
---

{{APIRef("Compression Streams API")}}

**`CompressionStream()`** コンストラクターは、データのストリームを圧縮する新しい {{domxref("CompressionStream")}} オブジェクトを生成します。

## 構文

```js-nolint
new CompressionStream(format)
```

### 引数

- `format`

  - : 以下の使用可能な圧縮形式のうちのいずれかです。

    - `"gzip"`
    - `"deflate"`
    - `"deflate-raw"`

## 例外

- {{jsxref("TypeError")}}
  - : コンストラクターに渡された形式がサポートされていないとき投げられます。

## 例

この例では、ストリームを gzip 圧縮を用いて圧縮します。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
