---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`ReadableStreamDefaultReader`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、ネットワークから提供されたストリームデータ（フェッチリクエストなど）を読み取るために使用できる既定のリーダーを表します。

`ReadableStreamDefaultReader` は、任意の種類の基盤ソースを持つ {{domxref("ReadableStream")}} からの読み取りに使用することができます（基盤バイトソースを持つ読み取り可能なストリームにのみ使用することができる {{domxref("ReadableStreamBYOBReader")}} とは異なります）。

ただし、基盤ソースからのゼロコピー移譲は、バッファーを自動割り当てするバイトソースにのみ対応していることに注意してください。
言い換えれば、ストリームは[構築時](/ja/docs/Web/API/ReadableStream/ReadableStream)に、[`type="bytes"`](/ja/docs/Web/API/ReadableStream/ReadableStream#type) と [`autoAllocateChunkSize`](/ja/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) の両方が指定されたものでなければなりません。他にも基盤ソースがある場合、ストリームは常に内部キューからのデータで読み取りリクエストを満たします。

## コンストラクター

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}
  - : `ReadableStreamDefaultReader` オブジェクトのインスタンスを作成して返します。

## インスタンスプロパティ

- {{domxref("ReadableStreamDefaultReader.closed")}} {{ReadOnlyInline}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられた場合、またはリーダーのロックが解除された場合に履行されるプロミスを返します。 ストリームがエラーの場合は拒否されます。

## インスタンスメソッド

- {{domxref("ReadableStreamDefaultReader.cancel()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された引数 `reason` は、基盤ソースに与えられ、使用する場合もしない場合もあります。
- {{domxref("ReadableStreamDefaultReader.read()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供するプロミスを返します。
- {{domxref("ReadableStreamDefaultReader.releaseLock()")}}
  - : ストリームのリーダーのロックを解除します。

## 例

次の例では、別のリソースから取得した HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} を作成します。

これは {{jsxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示します。

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // 次の関数は各データチャンクを処理します
      function push() {
        // done は Boolean で、value は Uint8Array です
        return reader.read().then(({ done, value }) => {
          // 読み取るデータはもうありませんか？
          if (done) {
            // データの送信が完了したことをブラウザーに伝えます
            controller.close();
            return;
          }

          // データを取得し、コントローラー経由でブラウザーに送信します
          controller.enqueue(value);
          push();
        });
      }

      push();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関r根情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
