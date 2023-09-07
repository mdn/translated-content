---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
---

{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`ReadableStreamDefaultReader`** インターフェイスは、ネットワークから提供されたストリームデータ（フェッチ要求など）を読み取るために使用できるデフォルトのリーダーを表します。

## コンストラクター

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}
  - : `ReadableStreamDefaultReader` オブジェクトのインスタンスを作成して返します。

## プロパティ

- {{domxref("ReadableStreamDefaultReader.closed")}} {{readonlyInline}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たされる promise を返します。 ストリームがエラーの場合は拒否します。

## メソッド

- {{domxref("ReadableStreamDefaultReader.cancel()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された reason 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。
- {{domxref("ReadableStreamDefaultReader.read()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。
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

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultReader")}}
