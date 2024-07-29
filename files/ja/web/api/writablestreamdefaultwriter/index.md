---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`WritableStreamDefaultWriter`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、 {{domxref("WritableStream.getWriter()")}} によって返されるオブジェクトであり、作成されるとライターを `WritableStream` にロックし、他のストリームが基になるシンクに書き込めないようにします。

## コンストラクター

- {{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}
  - : 新しい `WritableStreamDefaultWriter` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("WritableStreamDefaultWriter.closed")}} {{ReadOnlyInline}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。ストリームが閉じられるか、ライターのロックが解除されると履行され、ストリームがエラーになるか、ライターのロックが解放されると拒否されるプロミスを返します。
- {{domxref("WritableStreamDefaultWriter.desiredSize")}} {{ReadOnlyInline}}
  - : ストリームの内部キューを満たすために必要な希望サイズを返します。
- {{domxref("WritableStreamDefaultWriter.ready")}} {{ReadOnlyInline}}
  - : ストリームの内部キューの希望サイズが非正から正に移行したときに解決する {{jsxref("Promise")}} を返し、バックプレッシャーが適用されなくなったことを通知します。

## インスタンスメソッド

- {{domxref("WritableStreamDefaultWriter.abort()")}}
  - : ストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに入れられた書き込みを破棄してすぐにエラー状態に移行することを通知します。
- {{domxref("WritableStreamDefaultWriter.close()")}}
  - : 関連する書き込み可能なストリームを閉じます。
- {{domxref("WritableStreamDefaultWriter.releaseLock()")}}
  - : 対応するストリームのライターのロックを解除します。 ロックを解除すると、ライターはアクティブではなくなります。 ロックを解除したときに関連するストリームにエラーが発生した場合、ライターはこれ以降同じようにエラーが発生したように見えます。 そうでない場合、ライターは閉じられたように見えます。
- {{domxref("WritableStreamDefaultWriter.write()")}}
  - : 渡されたデータのチャンクを {{domxref("WritableStream")}} とその基になるシンクに書き込んでから、書き込み操作の成功または失敗を示すために解決する {{jsxref("Promise")}} を返します。

## 例

次の例は、カスタムのシンクと API 提供のキューイング戦略を使用した `WritableStream` の作成を示しています。 次に、`sendMessage()` という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの `getWriter()` メソッドを呼び出します。 `forEach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`write()` および `close()` は、チャンクとストリームの成功または失敗に対処するための promise を返します。

```js
const list = document.querySelector("ul");

async function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);

  try {
    for (const chunk of encoded) {
      await defaultWriter.ready;
      await defaultWriter.write(chunk);
      console.log("Chunk written to sink.");
    }
    // ライターを閉じる前にすべてのチャンクが確実に
    // 書き込まれるように、ready を再度呼び出します。
    await defaultWriter.ready;
    await defaultWriter.close();
    console.log("All chunks written");
  } catch (err) {
    console.log("Error:", err);
  }
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // シンクの実装
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `Chunk decoded: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-examples/streams/simple-writer/)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
