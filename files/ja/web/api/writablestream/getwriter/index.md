---
title: "WritableStream: getWriter() メソッド"
short-title: getWriter()
slug: Web/API/WritableStream/getWriter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`getWriter()`** は {{domxref("WritableStream")}} インターフェイスのメソッドで、{{domxref("WritableStreamDefaultWriter")}} の新しいインスタンスを返し、そのインスタンスにストリームをロックします。
ストリームがロックされている間、このライターが解放されるまで他のライターを取得することはできません。

## 構文

```js-nolint
getWriter()
```

### 引数

なし。

### 返値

{{domxref("WritableStreamDefaultWriter")}} オブジェクトのインスタンス。

### 例外

- {{jsxref("TypeError")}}
  - : ライターを作成しようとしているストリームが {{domxref("WritableStream")}} ではない場合。

## 例

次の例は、このインターフェイスのいくつかの機能を示しています。 カスタムのシンクと API 提供のキューイング戦略を使用した `WritableStream` の作成を示しています。 次に、`sendMessage()` という関数を呼び出し、新しく作成したストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの `getWriter()` メソッドを呼び出します。 `forEach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`write()` および `close()` は、チャンクとストリームの成功または失敗に対処するためのプロミスを返します。

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、ready を再度呼び出します。
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
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
