---
title: 書き込み可能なストリームの使用
slug: Web/API/Streams_API/Using_writable_streams
---

{{apiref("Streams")}}

JavaScript 開発者として、プログラムでストリームにデータを書き込むことは非常に便利です！ この記事では、[Streams API](/ja/docs/Web/API/Streams_API) の書き込み可能なストリームの機能について説明します。

> **メモ:** この記事は、書き込み可能なストリームのユースケースを理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず [Streams の概念と使用方法の概要](/ja/docs/Web/API/Streams_API#Concepts_and_usage)と専用の [Streams API の概念](/ja/docs/Web/API/Streams_API/Concepts)の記事を読んでから、戻ってくることをお勧めします。

> **メモ:** 読み取り可能なストリームに関する情報を探している場合は、代わりに[読み取り可能なストリーム](/ja/docs/Web/API/Streams_API/Using_readable_streams)の使用を試してください。

## ブラウザーのサポート

Streams API は実験的なものであり、サポートは現在初期段階にあります。 現在、基本的な書き込み可能なストリームが実装されているのは Chrome のみです。

## 例の紹介

[dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) リポジトリには、単純なライターの例（[Simple writer example](https://github.com/mdn/dom-examples/blob/master/streams/simple-writer/index.html)）があります（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-writer/)）。 これは、指定されたメッセージを取得して書き込み可能なストリームに書き込み、ストリームに書き込まれるときに UI に各チャンクを表示し、書き込みが終了すると UI にメッセージ全体を表示します。

## 書き込み可能なストリームの仕組み

書き込み可能なストリーム機能のデモの仕組みを見てみましょう。

### 書き込み可能なストリームの構築

書き込み可能なストリームを作成するには、{{domxref("WritableStream.WritableStream","WritableStream()")}} コンストラクターを使用します。 構文は最初は複雑に見えますが、実際にはそれほど悪くはありません。

構文の骨組みは次のようになります。

```js
const stream = new WritableStream({
  start(controller) {

  },
  write(chunk,controller) {

  },
  close(controller) {

  },
  abort(reason) {

  }
}, {
  highWaterMark,
  size()
});
```

コンストラクターはパラメーターとして 2 つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの書き込み先の基になるシンクのモデルを JavaScript で作成します。 2 番目のオブジェクトはオプションであり、{{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスの形式をとる、ストリームに使用する[カスタムのキューイング戦略](/ja/docs/Web/API/Streams_API/Concepts#Internal_queues_and_queuing_strategies)を指定できます。

次のように最初のオブジェクトには最大 4 つのメンバーを含めることができますが、それらはすべてオプションです。

1. `start(controller)` — {{domxref("WritableStream")}} が構築された直後に 1 回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、基になるシンクへのアクセスを取得します。
2. `write(chunk,controller)` — 新しいチャンク（`chunk` パラメーターで指定）を基になるシンクに書き込む準備ができるたびに繰り返し呼び出されるメソッド。
3. `close(controller)` — ストリームへのチャンクの書き込みが完了したことをアプリが通知した場合に呼び出されるメソッド。 基になるシンクへの書き込みを完了し、アクセスを解放するために必要なことは何でも行う必要があります。
4. `abort(reason)` — ストリームを突然閉じてエラー状態にしたいとアプリが通知した場合に呼び出されるメソッド。

この例のコンストラクター呼び出しは次のようになります。

```js
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
```

- `write()` メソッドには、書き込まれた各チャンクを UI に書き込める形式にデコードするコードを含むプロミスが含まれています。 これは、各チャンクが実際に書き込まれるときに呼び出されます（次のセクションを参照）。
- `close()` メソッドは、書き込みが終了すると自動的に呼び出されます — デコードされた結果全体を 1 つの文字列で UI に出力します。
- `abort()` メソッドは、ストリームが中断された場合にコンソールにエラーを出力するだけです。

### 書き込み

実際にストリームにコンテンツを書き込むには、次のように `sendMessage()` 関数を呼び出して、書き込むメッセージと書き込み先のストリームを渡します。

```js
sendMessage("Hello, world.", writableStream);
```

`sendMessage()` の定義は次のようになります。

```js
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
  // ライターを閉じる前にすべてのチャンクが確実に
  // 書き込まれるように、ready を再度呼び出します。
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
```

したがって、ここでは、{{domxref("WritableStream.getWriter()")}} を使用してストリームにチャンクを書き込むライターを作成します。 これにより、{{domxref("WritableStreamDefaultWriter")}} インスタンスが作成されます。

また、関連するコンストラクターを使用して新しい {{domxref("TextEncoder")}} インスタンスを作成し、メッセージをチャンクにエンコードしてストリームに入れます。

エンコードされたチャンクを使用して、結果の配列で {{jsxref("Array/forEach")}} を呼び出します。 このブロック内で、{{domxref("WritableStreamDefaultWriter.ready")}} を使用して、ライターに別のチャンクを書き込む準備ができているかどうかを確認します。 `ready` は、この場合に満たされるプロミスを返します。 その中で、{{domxref("WritableStreamDefaultWriter.write()")}} を呼び出して、実際にストリームにチャンクを書き込みます。 これにより、前述のように、`WritableStream()` コンストラクター内で指定された `write()` メソッドもトリガーされます。

チャンクがすべて書き込まれた後、最後のチャンクの書き込みが完了し、すべての作業が完了したことを確認するために、もう一度 `ready` のチェックを実行します。この `ready` のチェックが完了すると、{{domxref("WritableStreamDefaultWriter.close()")}} を呼び出してストリームを閉じます。 これにより、前述のように、`WritableStream()` コンストラクター内で指定された `close()` メソッドもトリガーされます。

### コントローラー

`WritableStream()` 構文の骨組みを学習するときに気付くように、`start()`、`write()`、および `close()` メソッドには、オプションで `controller` パラメーターを渡すことができます。 これには、{{domxref("WritableStreamDefaultController")}} インターフェイスのインスタンスが含まれます。 これは、開発者が必要に応じてストリームをさらに制御するために使用できます。

現在、このインターフェイスで使用できるメソッドは {{domxref("WritableStreamDefaultController.error()")}} のみです。 このメソッドを呼び出すと、ストリームとの今後の相互作用でエラーが発生します。 これは、アプリの別の部分がうまくいかず、がらくたがストリームに静かに書き込まれる (または同様に悪い）危険を冒すのではなく、システム全体がきれいに失敗するようにエラーをストリームに伝播したい場合に便利です。

### 終了および中止

上記のように、書き込みが終了すると `close()` メソッドを呼び出し、`WritableStream()` コンストラクター内で指定された `close()` メソッドをトリガーします。

{{domxref("WritableStreamDefaultWriter.abort()")}} を呼び出してストリームを中止することもできます。

違いは、`close()` を呼び出すと、ストリームが閉じられる前に、以前にキューに入れられたチャンクが書き込まれ、終了することです。

`abort()` を呼び出すと、以前にキューに入れられたチャンクはすぐに破棄され、ストリームはエラー状態に移行します。 また、これにより、`WritableStream()` コンストラクターで指定された `abort()` メソッドが呼び出されます。
