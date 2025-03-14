---
title: "Blob: stream() メソッド"
short-title: stream()
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`stream()`** は {{domxref("Blob")}} インターフェイスのメソッドで、{{domxref("ReadableStream")}} を返します。これは、読み取り時に、`Blob` に含まれるデータを返します。

## 構文

```js-nolint
stream()
```

### 引数

なし。

### 返値

読み取り時に、`Blob` の内容を {{domxref("ReadableStream")}} で返します。

## 使用上のメモ

`stream()` と返された {{domxref("ReadableStream")}} を使用すると、いくつかの興味深い機能を得ることができます。

- 返されたストリーム上で{{domxref("ReadableStream.getReader", "getReader()")}} を呼び出すと、 {{domxref("ReadableStreamDefaultReader")}} インターフェイスの{{domxref("ReadableStreamDefaultReader.read", "read()")}} メソッドのようなメソッドを使用して、Blob からデータを読み取るために使用するオブジェクトを取得できます。
- 返されたストリームの {{domxref("ReadableStream.pipeTo", "pipeTo()")}} メソッドを呼び出すと、Blob のデータを書き込み可能なストリームにパイプ接続します。
- 返されたストリームの {{domxref("ReadableStream.tee", "tee()")}} メソッドを呼び出すと、読み取り可能なストリームを**分岐**します。これは、2 つの新しい `ReadableStream` オブジェクトを含む配列を返し、それぞれが `Blob` の内容を返します。
- 返されたストリームの {{domxref("ReadableStream.pipeThrough", "pipeThrough()")}} メソッドを呼び出すと、ストリームを {{domxref("TransformStream")}} またはその他の読み取り可能なもの、および書き込み可能ものの組にパイプ接続します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.body")}}
- [ストリーム API](/ja/docs/Web/API/Streams_API)
