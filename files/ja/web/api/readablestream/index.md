---
title: ReadableStream
slug: Web/API/ReadableStream
l10n:
  sourceCommit: e862ea87669db4c9f9d28d141613fbc7ce558838
---

{{APIRef("Streams")}}

`ReadableStream` は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、バイトデータの読み取り可能なストリームを表します。 [Fetch API](/ja/docs/Web/API/Fetch_API) は、 `ReadableStream` の具体的なインスタンスを{{domxref("Response")}} オブジェクトの {{domxref("Response.body", "body")}} プロパティを介して提供します。

`ReadableStream` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## コンストラクター

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : 指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

## インスタンスプロパティ

- {{domxref("ReadableStream.locked")}} {{ReadOnlyInline}}
  - : 論理値で、読み取り可能なストリームがリーダーにロックされているかどうかを返します。

## 静的メソッド

- {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} {{Experimental_Inline}}
  - : 指定された反復可能オブジェクトまたは非同期反復可能オブジェクト（配列、集合、非同期ジェネレーターなど）から `ReadableStream` を返します。

## インスタンスメソッド

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

## 非同期の反復処理

`ReadableStream` は[非同期反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)を実装しています。
これにより、 [`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) 構文を使用して、ストリーム内のチャンクを非同期に反復処理することができます。

```js
const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream) {
  // それぞれの 'chunk' で何かをする
}
```

非同期イテレーターは、データがなくなるか、さもなければ終了するまでストリームを消費します。
ループは `break`、`throw`、`return` ステートメントによって早期に終了することもできます。

反復処理中は、他のコンシューマーがリーダーを取得できないようにストリームがロックされます（既にロックされているストリームを反復処理しようとすると `TypeError` が発生します）。
このロックはループが終了すると解除されます。

既定値では、ループを終了するとストリームも取り消される可能性があり、使用できなくなります。
ループを抜けた後もストリームを使用し続けるには、ストリームの `values()` メソッドに `{ preventCancel: true }` を渡してください。

```js
for await (const chunk of stream.values({ preventCancel: true })) {
  // 'chunk' で何かをする
  break;
}
// ストリームのためのリーダーを取得し、読み取りを続ける ...
```

## 例

### ストリームのフェッチ

次の例では、別のリソースからフェッチした HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} が作成されます。

これは {{jsxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示しています。

```js
fetch("https://www.example.org")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // 次の関数は各データチャンクを処理します
        function push() {
          // done は論理値で、value は Uint8Array です
          reader.read().then(({ done, value }) => {
            // 読み取るデータがもうない場合
            if (done) {
              console.log("done", done);
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
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### 非同期イテレーターをストリームへ変換

静的な {{domxref("ReadableStream/from_static", "from()")}} メソッドは、イテレーターを変換します。例えば {{jsxref("Array")}} や {{jsxref("Map")}}, [（非同期）イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)を読み取り可能なストリームへ変換します。

```js
const myReadableStream = ReadableStream.from(iteratorOrAsyncIterator);
```

`from()` メソッドに対応していないブラウザーでは、代わりに自分自身で[独自の読み取り可能なストリーム](/ja/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream)を作成して同じ結果を得ることができます。

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

### for await...of を用いたストリームの非同期反復処理

この例では、 `fetch()` レスポンスを処理するために [`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループを使用して、到着したチャンクを反復処理する方法を示します。

```js
const response = await fetch("https://www.example.org");
let total = 0;

// Iterate response.body (a ReadableStream) asynchronously
for await (const chunk of response.body) {
  // Do something with each chunk
  // Here we just accumulate the size of the response.
  total += chunk.length;
}

// Do something with the total
console.log(total);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/): 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) または [sd-streams](https://github.com/stardazed/sd-streams) - ポリフィル
