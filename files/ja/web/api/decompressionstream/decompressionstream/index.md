---
title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("Compression Streams API")}}

**`DecompressionStream()`** コンストラクターは、データのストリームを展開する新しい {{domxref("DecompressionStream")}} オブジェクトを生成します。

## 構文

```js-nolint
new DecompressionStream(format)
```

### 引数

- `format`

  - : 以下の圧縮形式のうちのいずれかです。

    - `"gzip"`
    - `"deflate"`
    - `"deflate-raw"`

## 例外

- {{jsxref("TypeError")}}
  - : コンストラクターに渡された形式がサポートされていないとき投げられます。

## 例

この例では、blob を gzip 圧縮を用いて展開します。

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
