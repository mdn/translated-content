---
title: "WritableStreamDefaultWriter: write() メソッド"
short-title: write()
slug: Web/API/WritableStreamDefaultWriter/write
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`write()`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスのメソッドで、渡されたデータのチャンクを {{domxref("WritableStream")}} とその基になるシンクに書き込み、その後、書き込み操作の成功または失敗を示すために解決される {{jsxref("Promise")}} を返します。

「成功」の意味は、基になるシンク次第であることに注意してください。 単にチャンクが受け入れられたことを示しているだけで、必ずしも最終的な宛先に安全に保存されているとは限りません。

## 構文

```js-nolint
write(chunk)
```

### 引数

- `chunk`
  - : `WritableStream` に渡すバイナリデータのブロック。

### 返値

{{jsxref("Promise")}} です。 書き込みが成功すると `undefined` で満たされ、書き込みプロセスが開始される前に書き込みが失敗するかストリームがエラーになると拒否されます。

### 例外

- {{jsxref("TypeError")}}
  - : 対象のストリームは書き込み可能なストリームではないか、オーナーがない場合。

## 例

次の例は、カスタムのシンクと API 提供のキューイング戦略を使用した `WritableStream` の作成を示しています。 次に、`sendMessage()` という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの `getWriter()` メソッドを呼び出します。 `forEach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`write()` および `close()` は、チャンクとストリームの成功または失敗に対処するためのプロミスを返します。

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
