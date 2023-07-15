---
title: ReadableStream
slug: Web/API/ReadableStream
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Streams")}}

`ReadableStream` は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、バイトデータの読み取り可能なストリームを表します。 [Fetch API](/ja/docs/Web/API/Fetch_API) は、 `ReadableStream` の具体的なインスタンスを{{domxref("Response")}} オブジェクトの {{domxref("Response.body", "body")}} プロパティを介して提供します。

`ReadableStream` は{{glossary("Transferable objects","移譲可能オブジェクト")}}です。

## コンストラクター

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : 指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

## プロパティ

- {{domxref("ReadableStream.locked")}} {{ReadOnlyInline}}
  - : 論理値で、読み取り可能なストリームがリーダーにロックされているかどうかを返します。

## メソッド

- {{domxref("ReadableStream.cancel()")}}
  - : ストリームがキャンセルされたときに解決する {{jsxref("Promise")}} を返します。このメソッドを呼び出されると、コンシューマーがストリームへの関心を失ったことを通知します。与えられた `reason` 引数は基になるソースに与えられ、使用する場合と使用しない場合があります。
- {{domxref("ReadableStream.getReader()")}}
  - : リーダーを作成し、ストリームをロックします。 ストリームがロックされている間は、このリーダーが解放されるまで他のリーダーを取得できません。
- {{domxref("ReadableStream.pipeThrough()")}}
  - : 変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して、現在のストリームをパイプ接続するチェーン可能な方法を提供します。
- {{domxref("ReadableStream.pipeTo()")}}
  - : 現在の `ReadableStream` を指定された {{domxref("WritableStream")}} に接続し、 {{jsxref("Promise")}} を返します。これはパイピングプロセスが正常に完了したときに履行され、エラーが発生した場合は拒否されます。
- {{domxref("ReadableStream.tee()")}}
  - : `tee` メソッドは、この読み取り可能なストリームを [tee](https://streams.spec.whatwg.org/#tee-a-readable-stream) し、結果の 2 つの分岐を含む 2 要素配列を新しい {{domxref("ReadableStream")}} インスタンスとして返します。 これらの各ストリームは、同じ着信データを受信します。

## 例

### ストリームのフェッチ

次の例では、別のリソースからフェッチした HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} が作成されます。

これは {{jsxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示しています。

```js
fetch('https://www.example.org')
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // 次の関数は各データチャンクを処理します
        function push() {
          // done は論理値で、value は Uint8Array です
          reader.read().then(({ done, value }) => {
            // 読み取るデータはもうありませんか？
            if (done) {
              // データの送信が完了したことをブラウザーに伝えます
              controller.close();
              return;
            }
            // データを取得し、コントローラー経由でブラウザーに送信します
            controller.enqueue(value);
            // コンソールにログを出力してチャンクを調べる
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // ストリームで応答する
    new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### 非同期イテレーターをストリームへ変換

[（非同期）イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)を読み取り可能なストリームへ変換します。

```js
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}
```

これは、イテレーターが非同期でも非同期でなくても動作します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/): 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。
