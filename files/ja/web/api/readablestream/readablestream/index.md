---
title: ReadableStream.ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
---
{{APIRef("Streams")}}

**`ReadableStream()`** コンストラクターは、指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

## 構文

```
var readableStream = new ReadableStream(underlyingSource[, queuingStrategy]);
```

### パラメーター

- underlyingSource

  - : 構築されたストリームのインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 `underlyingSource` には次のものを含めることができます。

    - start(controller)
      - : これは、オブジェクトが構築されるとすぐに呼び出されるメソッドです。 このメソッドの内容は開発者が定義し、ストリームのソースへのアクセスを取得し、ストリーム機能を設定するために必要な他のすべての操作を行う必要があります。 このプロセスを非同期で実行する場合、成功または失敗を通知する promise を返すことができます。 このメソッドに渡される `controller` パラメーターは、`type` プロパティの値に応じて、{{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} です。 開発者はこれを使用して、セットアップ中にストリームを制御できます。
    - pull(controller) {{optional_inline}}
      - : このメソッドは、開発者が定義し、ストリームの内部チャンクのキューがいっぱいになっていない場合、最高水準点に達するまで繰り返し呼び出されます。 `pull()` が promise を返す場合、その promise が満たされるまで再び呼び出されません。 promise が拒否された場合、ストリームはエラーになります。 このメソッドに渡される `controller` パラメーターは、`type` プロパティの値に応じて、{{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} です。 開発者は、これを使用して、より多くのチャンクがフェッチされるときにストリームを制御できます。
    - cancel(reason) {{optional_inline}}
      - : このメソッドは、開発者が定義し、ストリームがキャンセルされることをアプリが通知した場合に呼び出されます（例えば、{{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。 このプロセスが非同期の場合、成功または失敗を通知する promise を返すことができます。 `reason` パラメータには、ストリームがキャンセルされた理由を説明する {{domxref("DOMString")}} が含まれています。
    - type {{optional_inline}}
      - : このプロパティは、どのタイプの読み取り可能なストリームが処理されるかを制御します。 `"bytes"` に設定された値が含まれている場合、渡されるコントローラーオブジェクトは、BYOB（独自のバッファーを持ち込む）/バイトストリームを処理できる {{domxref("ReadableByteStreamController")}} になります。 含まれていない場合、渡されるコントローラーは {{domxref("ReadableStreamDefaultController")}} になります。
    - autoAllocateChunkSize {{optional_inline}}
      - : バイトストリームの場合、開発者は `autoAllocateChunkSize` に正の整数値を設定して、ストリームの自動割り当て機能をオンにできます。 これをオンにすると、ストリームの実装は、指定された整数のサイズで {{jsxref("ArrayBuffer")}} を自動的に割り当て、コンシューマーがデフォルトのリーダーも使用できるようになります。

- queuingStrategy {{optional_inline}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つのパラメーターが必要です。

    - highWaterMark
      - : 負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - size(chunk)
      - : パラメーター `chunk` を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。

    > **Note:** **注**: 独自のカスタム `queuingStrategy` を定義するか、このオブジェクト値に {{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスを使用できます。 `queuingStrategy` が指定されていない場合、使用されるデフォルトは、最高水準点が 1 の `CountQueuingStrategy` と同じです。

### 戻り値

{{domxref("ReadableStream")}} オブジェクトのインスタンス。

### 例外

- RangeError
  - : 指定された `type` 値は、 `"bytes"` でも `undefined` でもありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにランダムなテキスト文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するために `cancel()` 関数も提供します。

ボタンを押すと、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // ストリームに文字列を追加
      controller.enqueue(string);

      // それを画面に表示
      let listItem = document.createElement('li');
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener('click', function() {
      clearInterval(interval);
      fetchStream();
      controller.close();
    })
  },
  pull(controller) {
    // この例では実際には pull は必要ありません
  },
  cancel() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    clearInterval(interval);
  }
});
```

## 仕様

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-constructor","ReadableStream()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.ReadableStream")}}
