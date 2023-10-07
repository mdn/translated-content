---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**TransformStreamDefaultController`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、関連する {{domxref("ReadableStream")}} と {{domxref("WritableStream")}} を操作するメソッドを提供します。

{{domxref("TransformStream")}} を作成すると、 `TransformStreamDefaultController` が作成されます。そのため、コンストラクターはありません。 `TransformStreamDefaultController` のインスタンスを取得するには、 {{domxref("TransformStream.TransformStream", "TransformStream()")}} のコールバックメソッドを使用します。

## インスタンスプロパティ

- {{domxref("TransformStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : ストリームの内部キューの読み取り可能な側を埋めるために必要なサイズを返します。

## インスタンスメソッド

- {{domxref("TransformStreamDefaultController.enqueue()")}}
  - : ストリームの読み取り可能な側にチャンク（単一のデータ）をキューに入れます。
- {{domxref("TransformStreamDefaultController.error()")}}
  - : 変換ストリームの読み取り可能な側と書き込み可能な側の両方をエラーを発生させます。
- {{domxref("TransformStreamDefaultController.terminate()")}}
  - : ストリームの読み取り可能な側を閉じ、書き込み可能な側にエラーを発生させます。

## 例

次の例では、変換ストリームは、 {{domxref("TransformStreamDefaultController.error()","error()")}} メソッドと {{domxref("TransformStreamDefaultController.enqueue()", "enqueue()")}} メソッドを使用して、受信したチャンクをすべて {{jsxref("Uint8Array")}} 値として渡します。

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
