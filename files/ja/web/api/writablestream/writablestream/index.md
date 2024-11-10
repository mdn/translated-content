---
title: "WritableStream: WritableStream() コンストラクター"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`WritableStream()`** コンストラクターは、新しい {{domxref("WritableStream")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### 引数

- `underlyingSink` {{optional_inline}}

  - : 構築されたストリームのインスタンスの振る舞いを定義するメソッドとプロパティを含むオブジェクト。 `underlyingSink` には以下を含めることができます。このメソッドに渡される `controller` 引数は {{domxref("WritableStreamDefaultController")}} であり、これを使用して中止やエラーの通知を行うことができます。

    - `start(controller)` {{optional_inline}}
      - : これは、オブジェクトが構築されたときにすぐに呼び出されるメソッドです。このメソッドの中身は開発者が定義し、基礎となるシンクにアクセスすることを目的とする必要があります。この処理が非同期で行われる場合は、成功か失敗かを示すプロミスを返すことができます。
    - `write(chunk, controller)` {{optional_inline}}
      - : このメソッドも開発者によって定義され、新しいデータチャンク （`chunk` 引数で指定されたもの）が基底のシンクに書き込める状態になったときに呼び出されます。このメソッドは、書き込み処理の成功または失敗を示すプロミスを返すことができます。このメソッドは前回の書き込みが成功した後にのみ呼び出され、ストリームが閉じられたり中断されたりした後には呼び出されません（下記参照）。
    - `close(controller)` {{optional_inline}}
      - : このメソッドも開発者によって定義され、アプリがストリームへのチャンクの書き込みを完了したことを通知すると呼び出されます。中身は、基礎となるシンクへの書き込みを確定し、それへのアクセスを解放するために必要なことを何でも行う必要があります。
        この処理が非同期である場合、成功または失敗を示すプロミスを返すことができます。このメソッドは、キューに入れられたすべての書き込みが成功した後にのみ呼び出されます。
    - `abort(reason)` {{optional_inline}}
      - : このメソッドも開発者によって定義され、アプリが突然ストリームを閉じてエラー状態にしたいことを合図したときに呼び出されます。これは `close()` のように保持されたリソースを整理することができますが、書き込みがキューイングされている場合でも `abort()` が呼び出されます - これらのチャンクは破棄されます。この処理が非同期の場合、成功や失敗のシグナルのためにプロミスを返すことができます。 `reason` 引数には、ストリームが中断された理由を記述する文字列を指定します。

- `queuingStrategy` {{optional_inline}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つの引数が必要です。

    - `highWaterMark`
      - : 負でない整数です。これは、背圧が適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - `size(chunk)`
      - : `chunk` 引数を含むメソッドです。これは、各チャンクに使用するサイズをバイト単位で示します。

    > [!NOTE]
    > 独自のカスタム `queuingStrategy` を定義するか、このオブジェクト値に {{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスを使用できます。 `queuingStrategy` が指定されていない場合、使用されるデフォルトは、最高水準点が 1 の `CountQueuingStrategy` と同じです。

### 返値

{{domxref("WritableStream")}} オブジェクトのインスタンス。

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

### 背圧

API での背圧のサポート方法により、コードでの実装は明白ではありません。 背圧がどのように実装されているかを確認するには、3 つのことを探します。

- カウント戦略の作成時に設定される `highWaterMark` プロパティ（行 35）は、`WritableStream` インスタンスが 1 回の `write()` 操作で処理するデータの最大量を設定します。 この例では、`defaultWriter.write()` に送信できるデータの最大量です（11 行目）。
- `defaultWriter.ready` プロパティは、シンク（`WritableStream` コンストラクターの最初のプロパティ）がデータの書き込みを完了すると解決するプロミスを返します。 データソースは、さらにデータを書き込む（11 行目）か、`close()` （24 行目）を呼び出すことができます。 `close()` の呼び出しが早すぎると、データの書き込みが妨げられる可能性があります。 このため、この例では `defaultWriter.ready` を 2 回呼び出しています（9 行目と 22 行目）。
- シンクの `write()` メソッドによって返される {{jsxref("Promise")}}（40 行目）は、`WritableStream` とそのライターに、いつ `defaultWriter.ready` を解決するかを伝えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
