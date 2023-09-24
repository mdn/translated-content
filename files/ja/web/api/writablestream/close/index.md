---
title: "WritableStream: close() メソッド"
short-title: close()
slug: Web/API/WritableStream/close
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`close()`** は {{domxref("WritableStream")}} インターフェイスのメソッドで、関連付けられたストリームを閉じます。このメソッドが呼び出される前に書き込まれたチャンクはすべて、返されたプロミスが履行される前に送信されます。

これは {{domxref("WritableStreamDefaultWriter")}} を {{domxref("WritableStream.getWriter()", "getWriter()")}} で取得し、 {{domxref("WritableStreamDefaultWriter.close()", "close()")}} を呼び付けるのと同じです。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、閉じる前に残りのチャンクがすべて正常に書き込まれた場合は `undefined` で履行され、処理中に問題が発生した場合はエラーで拒否されます。

### 例外

- {{jsxref("TypeError")}}
  - : 閉じようとしているストリームがロックされています。

## 例

次の例は `WritableStream` のいくつかの機能を示しています。これはカスタムシンクと、 API が提供するキューイング戦略による `WritableStream` の作成を示しています。次に `sendMessage()` という関数を呼び出して、新しく作成したストリームと文字列を渡します。この関数の内部では、ストリームの `getWriter()` メソッドを呼び出して {{domxref("WritableStreamDefaultWriter")}} のインスタンスを返します。 `forEach()` 呼び出しは、文字列の各チャンクをストリームに書き込むために使用されます。最後に、 `write()` と `close()` はチャンクとストリームの成功と失敗を処理するプロミスを返します。なお、ストリーム自体で `close()` を呼び出すには、 `defaultWriter.releaseLock();` を使用してライターを切断する必要があります。

```html hidden
<ul id="log"></ul>
```

```js hidden
const list = document.getElementById("log");
function log(message) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  list.appendChild(listItem);
}
```

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        defaultWriter.write(chunk);
      })
      .catch((err) => {
        log("Chunk error:", err);
      });
  });

  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.releaseLock();
      writableStream.close();
    })
    .then(() => {
      log("All chunks written / stream closed.");
    })
    .catch((err) => {
      log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      log(`[MESSAGE RECEIVED] ${result}`);
    },
    abort(err) {
      log("Sink error:", err);
    },
  },
  queuingStrategy,
);

log("Sending 'Hello, world.' message.");
sendMessage("Hello, world.", writableStream);
```

{{EmbedLiveSample("Examples", "100%", "100px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
