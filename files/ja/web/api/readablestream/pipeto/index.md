---
title: "ReadableStream: pipeTo() メソッド"
short-title: pipeTo()
slug: Web/API/ReadableStream/pipeTo
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`pipeTo()`** は {{domxref("ReadableStream")}} インターフェイスのメソッドで、現在の `ReadableStream` を与えられた {{domxref("WritableStream")}} にパイプ接続します。返される {{jsxref("Promise")}} は、パイプのプロセスが正常に完了した場合は履行され、エラーが発生した場合は拒否されます。

ストリームをパイプ接続すると、通常、接続している間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```js-nolint
pipeTo(destination)
pipeTo(destination, options)
```

### 引数

- `destination`
  - : {{domxref("ReadableStream")}} の最終的な宛先として機能する {{domxref("WritableStream")}}。

- `options` {{optional_inline}}
  - : `writable` ストリームにパイプ接続するときに使用するオプションです。
    利用できるオプションは以下の通りです。
    - `preventClose`
      - : これを `true` に設定すると、入力元の `ReadableStream` が閉じられても、出力先の `WritableStream` が閉じられることはなくなります。
        このメソッドは、この処理が完全に終了すると履行されるプロミスを返します。ただし、出力先を閉じる際にエラーが発生した場合は、そのエラーで拒否されます。
    - `preventAbort`
      - : この値を `true` に設定すると、入力元の `ReadableStream` でエラーが発生しても、出力先の `WritableStream` を中断させることがなくなります。
        このメソッドは、出力元のエラー、または出力先を中止する際に発生したエラーで拒否されるプロミスを返します。
    - `preventCancel`
      - : この値を `true` に設定すると、出力先の `WritableStream` でエラーが発生しても、入力元の `ReadableStream` を取り消すことができなくなります。
        この場合、メソッドは、入力元のエラー、または入力元を取り消す際に発生するエラーで拒否されるプロミスを返します。
        また、出力先の書き込み可能なストリームが閉じられたり開始されたりした場合、入力元の読み取り可能なストリームは取り消されなくなります。
        この場合、メソッドは、閉じられたストリームへのパイプ処理に失敗したことを示すエラー、または入力元を取り消す際に発生するエラーとともに、拒否されるプロミスを返します。
    - `signal`
      - : [`AbortSignal`](/ja/docs/Web/API/AbortSignal) オブジェクトを設定すると、進行中のパイプ操作が対応する [`AbortController`](/ja/docs/Web/API/AbortController) から中止できます。

### 返値

パイプのプロセスが完了したときに解決する {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : `writableStream` や `readableStream` オブジェクトは、書き込み可能なストリーム/読み取り可能なストリームではないか、ストリームの一方または両方がロックされています。

## 例

```js
// 元の画像を読み取る
fetch("png-logo.png")
  // その body を ReadableStream として取得
  .then((response) => response.body)
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => rs.pipeTo(new FinalDestinationStream()));
```

同じ例で {{jsxref("Operators/await", "await")}} 使用すると次のようになります。

```js
(async () => {
  // 元の画像を読み取る
  const response = await fetch("png-logo.png");
  // その body を ReadableStream として取得
  response.body
    .pipeThrough(new PNGTransformStream())
    .pipeTo(new FinalDestinationStream());
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクター
- [パイプチェーン](/ja/docs/Web/API/Streams_API/Using_readable_streams#パイプチェーン)
