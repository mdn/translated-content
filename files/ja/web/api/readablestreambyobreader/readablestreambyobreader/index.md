---
title: "ReadableStreamBYOBReader: ReadableStreamBYOBReader() コンストラクター"
short-title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`ReadableStreamBYOBReader()`** コンストラクターは、`ReadableStreamBYOBReader` オブジェクトのインスタンスを作成して返します。

> [!NOTE]
> 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxref("ReadableStream.getReader()")}} メソッドに `"byob"` を引数につけて使用してください。

## 構文

```js-nolint
new ReadableStreamBYOBReader(stream)
```

### 引数

- `stream`
  - : 読み取られる {{domxref("ReadableStream")}}。

### 返値

{{domxref("ReadableStreamBYOBReader")}} オブジェクトのインスタンス。

### 例外

- TypeError
  - : 指定された `stream` パラメーターが {{domxref("ReadableStream")}} ではないか、別のリーダーによる読み取りのために既にロックされているか、そのストリームコントローラーが {{domxref("ReadableByteStreamController")}} ではありません。

## 例

コンストラクターが直接呼び出されることはほとんどありません。
代わりに、表示させるように {{domxref("ReadableStream.getReader()")}} を呼び出してください。

```js
const reader = stream.getReader({ mode: "byob" });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamBYOBReader")}}
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
