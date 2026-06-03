---
title: "ReadableStream: pipeThrough() メソッド"
short-title: pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`pipeThrough()`** は {{domxref("ReadableStream")}} インターフェイスのメソッドで、変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して現在のストリームを接続する連鎖可能な方法を提供します。

ストリームを接続すると、通常、接続している間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### 引数

- `transformStream`
  - : 読み取り可能なストリームと書き込み可能なストリームで構成され、データをある形式から別の形式に変換する {{domxref("TransformStream")}}（または構造 `{writable, readable}` のオブジェクト）。 書き込み可能なストリーム（`writable` stream）に書き込まれたデータは、読み取り可能なストリーム（`readable` stream）によって何らかの変換された状態で読み取ることができます。 例えば、{{domxref("TextDecoder")}} ではバイトが書き込まれ、そこから文字列が読み取られ、動画デコーダーではエンコードされたバイトが書き込まれ、非圧縮動画フレームが読み取られます。

- `options` {{optional_inline}}
  - : 書き込み可能な (`writable`) ストリームに接続するときに使用するオプションです。利用可能なオプションは次の通りです。
    - `preventClose`
      - : これを `true` に設定すると入力元の `ReadableStream` を閉じても、出力先の `WritableStream` が閉じられることはなくなります。
        このメソッドは、出力先を閉じる際にエラーが発生しない限り、この処理が完全に終了すると、履行されたプロミスを返します。

    - `preventAbort`
      - : これを `true` に設定すると、入力元の `ReadableStream` でエラーが発生しても、出力先の `WritableStream` を中断させることができなくなります。
        このメソッドは、入力元のエラー、または出力先を停止させる際に発生したエラーを含むプロミスを返します。

    - `preventCancel`
      - : これを `true` に設定すると、出力先の `WritableStream` でエラーが発生しても、入力元の `ReadableStream` をキャンセルすることができなくなります。
        この場合、このメソッドは、入力元のエラー、または入力元を取り消す際に発生したエラーを含む拒否されたプロミス を返します。
        さらに、出力先の書き込み可能なストリームが閉じられたり開始された場合、入力元の読み取り可能なストリームは取り消されることはありません。
        この場合、このメソッドは、閉じられたストリームへの接続に失敗したことを示すエラー、または入力元を取り消す際に発生する任意のエラーと共に、拒否されたプロミスを返します。

    - `signal`
      - : [`AbortSignal`](/ja/docs/Web/API/AbortSignal) オブジェクトに設定されている場合、 進行中のパイプ操作は、対応する [`AbortController`](/ja/docs/Web/API/AbortController) を介して中断することが可能です。

### 返値

`transformStream` の `readable` 側です。

### 例外

- {{jsxref("TypeError")}}
  - : `transformStream` の `writable` や `readable` プロパティが未定義です。

## 例

次の例（ライブ実行中の完全なコードについては [PNG のチャンクをアンパック](https://mdn.github.io/dom-examples/streams/png-transform-stream/)、ソースコードについては [png-transform-stream](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream) を参照）では、画像が取得され、その本体が {{domxref("ReadableStream")}} として取得されます。

次に、読み取り可能なストリームのコンテンツをログに記録し、`pipeThrough()` を使用して、グレースケールバージョンのストリームを作成する新しい関数に送信し、新しいストリームのコンテンツもログに記録します。

```js
// 元の画像を取得
fetch("png-logo.png")
  // その body を ReadableStream として取得
  .then((response) => response.body)
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  // 元の画像からグレースケール PNG ストリームを作成
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクター
- [パイプチェーン](/ja/docs/Web/API/Streams_API/Using_readable_streams#パイプチェーン)
