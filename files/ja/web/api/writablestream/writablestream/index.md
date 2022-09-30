---
title: WritableStream.WritableStream()
slug: Web/API/WritableStream/WritableStream
---

{{SeeCompatTable}}{{APIRef("Streams")}}

**`WritableStream()`** コンストラクターは、新しい {{domxref("WritableStream")}} オブジェクトのインスタンスを作成します。

## 構文

```
var writableStream = new WritableStream(underlyingSink[, queuingStrategy]);
```

### パラメーター

- underlyingSink

  - : 構築されたストリームのインスタンスの振る舞いを定義するメソッドとプロパティを含むオブジェクト。 `underlyingSink` には以下を含めることができます。

    - start(controller) {{optional_inline}}
      - : これは、オブジェクトが構築されるとすぐに呼び出されるメソッドです。 このメソッドの内容は開発者が定義し、基になるシンクへのアクセスを取得することを目的とする必要があります。 このプロセスを非同期で実行する場合、成功または失敗を通知する promise を返すことができます。 このメソッドに渡される `controller` パラメーターは、{{domxref("WritableStreamDefaultController")}} です。 開発者はこれを使用して、セットアップ中にストリームを制御できます。
    - write(chunk, controller) {{optional_inline}}
      - : このメソッドは、開発者が定義し、新しいデータチャンク（`chunk` パラメーターで指定）を基になるシンクに書き込む準備ができたときに呼び出されます。 書き込み操作の成功または失敗を通知する promise を返すことができます。 このメソッドに渡される `controller` パラメーターは {{domxref("WritableStreamDefaultController")}} であり、開発者はこれを使用して、書き込み用に提出されるチャンクが増えるにつれてストリームを制御できます。 このメソッドは、以前の書き込みが成功した後にのみ呼び出され、ストリームが閉じられたり中止されたりした後は呼び出されません（以下を参照）。
    - close(controller) {{optional_inline}}
      - : このメソッドは、開発者が定義し、アプリがストリームへのチャンクの書き込みを完了したことを通知した場合に呼び出されます。 内容は、基になるシンクへの書き込みを完了し、アクセスを解放するために必要なことをすべて行う必要があります。 このプロセスが非同期の場合、成功または失敗を通知する promise を返すことができます。 このメソッドは、キューに入れられたすべての書き込みが成功した後にのみ呼び出されます。 このメソッドに渡される `controller` パラメーターは {{domxref("WritableStreamDefaultController")}} であり、これを使用して書き込みの最後にストリームを制御できます。
    - abort(reason) {{optional_inline}}
      - : このメソッドは、開発者が定義し、アプリがストリームを突然閉じてエラー状態にしたいという通知を受け取った場合に呼び出されます。 `close()` と同様に、保持しているリソースをクリーンアップできますが、書き込みがキューに入れられていても `abort()` が呼び出されます — これらのチャンクは破棄されます。 このプロセスが非同期の場合、成功または失敗を通知する promise を返すことができます。 `reason` パラメータには、ストリームが中止された理由を説明する {{domxref("DOMString")}} が含まれています。

- queuingStrategy {{optional_inline}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つのパラメーターが必要です。

    - highWaterMark
      - : 負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - size(chunk)
      - : パラメータ `chunk` を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。

    > **メモ:** 独自のカスタム `queuingStrategy` を定義するか、このオブジェクト値に {{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスを使用できます。 `queuingStrategy` が指定されていない場合、使用されるデフォルトは、最高水準点が 1 の `CountQueuingStrategy` と同じです。

### 戻り値

{{domxref("WritableStream")}} オブジェクトのインスタンス。

## 例

次の例は、このインターフェイスのいくつかの機能を示しています。 カスタムのシンクと API 提供のキューイング戦略を使用した `WritableStream` の作成を示しています。 次に、`sendMessage()` という関数を呼び出し、新しく作成したストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの `getWriter()` メソッドを呼び出します。 `forEach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`write()` および `close()` は、チャンクとストリームの成功または失敗に対処するための promise を返します。

```js
const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        return defaultWriter.write(chunk);
      })
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
const writableStream = new WritableStream({
  // シンクの実装
  write(chunk) {
    return new Promise((resolve, reject) => {
      var buffer = new ArrayBuffer(2);
      var view = new Uint16Array(buffer);
      view[0] = chunk;
      var decoded = decoder.decode(view, { stream: true });
      var listItem = document.createElement('li');
      listItem.textContent = "Chunk decoded: " + decoded;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    var listItem = document.createElement('li');
    listItem.textContent = "[MESSAGE RECEIVED] " + result;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

sendMessage("Hello, world.", writableStream);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-examples/streams/simple-writer/)にあります。

### バックプレッシャー

API でのバックプレッシャーのサポート方法により、コードでの実装は明白ではありません。 バックプレッシャーがどのように実装されているかを確認するには、3 つのことを探します。

- カウント戦略の作成時に設定される `highWaterMark` プロパティ（行 35）は、`WritableStream` インスタンスが 1 回の `write()` 操作で処理するデータの最大量を設定します。 この例では、`defaultWriter.write()` に送信できるデータの最大量です（11 行目）。
- `defaultWriter.ready` プロパティは、シンク（`WritableStream` コンストラクターの最初のプロパティ）がデータの書き込みを完了すると解決するプロミスを返します。 データソースは、さらにデータを書き込む（11 行目）か、`close()` （24 行目）を呼び出すことができます。 `close()` の呼び出しが早すぎると、データの書き込みが妨げられる可能性があります。 このため、この例では `defaultWriter.ready` を 2 回呼び出しています（9 行目と 22 行目）。
- シンクの `write()` メソッドによって返される {{jsxref("Promise")}}（40 行目）は、`WritableStream` とそのライターに、いつ `defaultWriter.ready` を解決するかを伝えます。

## 仕様

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#ws-constructor","WritableStream()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStream.WritableStream")}}
