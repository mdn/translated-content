---
title: Blob.stream()
slug: Web/API/Blob/stream
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`stream()`** メソッドは、{{domxref("ReadableStream")}} を返します。これは、読み取り時に、`Blob` に含まれるデータを返します。

## シンタックス

```
var stream = blob.stream();
```

### パラメータ

なし

### 戻り値

読み込んだときに、`Blob` の内容を {{domxref("ReadableStream")}} で返します。

## 使用上のメモ

`stream()` と返された {{domxref("ReadableStream")}} を使用すると、いくつかの興味深い機能を得ることができます。

- 返されたストリーム上で{{domxref("ReadableStream.getReader", "getReader()")}} を呼び出して、{{domxref("ReadableStreamDefaultReader")}} インターフェイスの{{domxref("ReadableStreamDefaultReader.read", "read()")}} メソッドのようなメソッドを使用して、Blob からデータを読み取るために使用するオブジェクトを取得します
- 返されたストリームの {{domxref("ReadableStream.pipeTo", "pipeTo()")}} メソッドを呼び出して、Blob のデータを書き込み可能なストリームにパイプします
- 返されたストリームの {{domxref("ReadableStream.tee", "tee()")}} メソッドを呼び出して、可読ストリームを **tee** します。これは、2 つの新しい `ReadableStream` オブジェクトを含む配列を返し、それぞれが `Blob` の内容を返します
- 返されたストリームの {{domxref("ReadableStream.pipeThrough", "pipeThrough()")}} メソッドを呼び出して、ストリームを {{domxref("TransformStream")}} またはその他の可読および書き込み可能なペアにパイプします

## 仕様

| 仕様書                                                                           | ステータス                   | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("File API", "#dom-blob-stream", "Blob.stream()")}} | {{Spec2("File API")}} |          |

## ブラウザの互換性

{{Compat("api.Blob.stream")}}

## あわせて参照

- {{domxref("Body.body")}}
- [Streams API](/ja/docs/Web/API/Streams_API)
