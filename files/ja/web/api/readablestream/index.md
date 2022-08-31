---
title: ReadableStream
slug: Web/API/ReadableStream
---
{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の `ReadableStream` インターフェイスは、バイトデータの読み取り可能なストリームを表します。 [Fetch API](/ja/docs/Web/API/Fetch_API) は、{{domxref("Response")}} オブジェクトの {{domxref("Body.body", "body")}} プロパティを介して `ReadableStream` の具体的なインスタンスを提供します。

## コンストラクター

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : 指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

## プロパティ

- {{domxref("ReadableStream.locked")}} {{readonlyInline}}
  - : `locked` ゲッターは、読み取り可能なストリームが[リーダーにロックされている](https://streams.spec.whatwg.org/#locked-to-a-reader)（英語）かどうかを返します。

## メソッド

- {{domxref("ReadableStream.cancel()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された `reason` 引数は、基になるソースに与えられ、使用する場合と使用しない場合があります。
- {{domxref("ReadableStream.getReader()")}}
  - : リーダーを作成し、ストリームをロックします。 ストリームがロックされている間は、このリーダーが開放されるまで他のリーダーを取得できません。
- {{domxref("ReadableStream.pipeThrough()")}}
  - : 変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して、現在のストリームをパイプ接続するチェーン可能な方法を提供します。
- {{domxref("ReadableStream.pipeTo()")}}
  - : 現在の `ReadableStream` を特定の {{domxref("WritableStream")}} にパイプし、パイピングプロセスが正常に完了したときに満たす promise を返します。 エラーが発生した場合は拒否します。
- {{domxref("ReadableStream.tee()")}}
  - : `tee` メソッドは、この読み取り可能なストリームを [tee](https://streams.spec.whatwg.org/#tee-a-readable-stream) し、結果の 2 つの分岐を含む 2 要素配列を新しい {{domxref("ReadableStream")}} インスタンスとして返します。 これらの各ストリームは、同じ着信データを受信します。

## 例

次の例では、別のリソースからフェッチした HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} が作成されます。

これは {{domxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示しています。

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // 次の関数は各データチャンクを処理します
      function push() {
        // done は Boolean で、value は Uint8Array です
        reader.read().then(({ done, value }) => {
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
      };

      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## 仕様

| 仕様                                                                 | 状態                         | コメント |
| -------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#rs-class','ReadableStream')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream")}}

## 関連情報

- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/): 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。
