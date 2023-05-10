---
title: ReadableStreamBYOBReader.ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
---

{{SeeCompatTable}}{{APIRef("Streams")}}

**`ReadableStreamBYOBReader()`** コンストラクターは、`ReadableStreamBYOBReader` オブジェクトのインスタンスを作成して返します。

> **メモ:** 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxref("ReadableStream.getReader()")}} メソッドを使用します。

## 構文

```
var readableStreamBYOBReader = new ReadableStreamBYOBReader(stream);
```

### パラメーター

- stream
  - : 読み取られる {{domxref("ReadableStream")}}。

### 戻り値

{{domxref("ReadableStreamBYOBReader")}} オブジェクトのインスタンス。

### 例外

- TypeError
  - : 指定された `stream` パラメーターが {{domxref("ReadableStream")}} ではないか、別のリーダーによる読み取りのために既にロックされているか、そのストリームコントローラーが {{domxref("ReadableByteStreamController")}} ではありません。

## 例

未定。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader.ReadableStreamBYOBReader")}}
