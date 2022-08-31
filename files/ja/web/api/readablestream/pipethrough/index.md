---
title: ReadableStream.pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
---
{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`pipeThrough()`** メソッドは、変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して現在のストリームをパイプするチェーン可能な方法を提供します。

ストリームをパイプすると、通常、パイプしている間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```
var transformedStream = readableStream.pipeThrough(transformStream[, options]);
```

### パラメーター

- transformStream
  - : 読み取り可能なストリームと書き込み可能なストリームで構成され、データをある形式から別の形式に変換する {{domxref("TransformStream")}}（または構造 `{writable, readable}` のオブジェクト）。 書き込み可能なストリーム（`writable` stream）に書き込まれたデータは、読み取り可能なストリーム（`readable` stream）によって何らかの変換された状態で読み取ることができます。 例えば、{{domxref("TextDecoder")}} ではバイトが書き込まれ、そこから文字列が読み取られ、動画デコーダーではエンコードされたバイトが書き込まれ、非圧縮動画フレームが読み取られます。
- options {{optional_inline}}
  - : 書き込み可能なストリーム（`writable` stream）にパイプするときに使用するオプション。 {{domxref("ReadableStream.pipeTo","pipeTo")}}`(writable, options)` のような呼び出しで使用されます。

### 戻り値

`transformStream` の `readable` 側。

### 例外

- TypeError
  - : `transformStream` の `writable` および/または `readable` プロパティは未定義です。

## 例

次の例（ライブ実行中の完全なコードについては [PNG のチャンクをアンパック](https://mdn.github.io/dom-examples/streams/png-transform-stream/)、ソースコードについては [png-transform-stream](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream) を参照）では、画像が取得され、そのボディが {{domxref("ReadableStream")}} として取得されます。 次に、読み取り可能なストリームのコンテンツをログに記録し、`pipeThrough()` を使用して、グレースケールバージョンのストリームを作成する新しい関数に送信し、新しいストリームのコンテンツもログに記録します。

```js
// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response => response.body)
.then(rs => logReadableStream('Fetch Response Stream', rs))
// 元の画像からグレースケール PNG ストリームを作成
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => logReadableStream('PNG Chunk Stream', rs))
```

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-pipe-through","pipeThrough()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.pipeThrough")}}
