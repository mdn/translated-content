---
title: "ReadableStream: ReadableStream() コンストラクター"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: d0ba214db1913215e8fac13bc2d66013b148d50a
---

{{APIRef("Streams")}}

**`ReadableStream()`** コンストラクターは、指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

すべての引数は技術的にオプションですが、 `underlyingSource` を省略すると、ソースを持たないストリームになり、そこから読み込むことができなくなることに注意してください（リーダーは決して解決されないプロミスを返します）。

## 構文

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### 引数

- `underlyingSource` {{optional_inline}}

  - : 構築されたストリームのインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 `underlyingSource` には次のものを含めることができます。

    - `start` (controller) {{optional_inline}}
      - : これは、オブジェクトが構築されるとすぐに呼び出されるメソッドです。 このメソッドの内容は開発者が定義し、ストリームのソースへのアクセスを取得し、ストリーム機能を設定するために必要な他のすべての操作を行う必要があります。 このプロセスを非同期で実行する場合、成功または失敗を通知するプロミスを返すことができます。このメソッドに渡される `controller` 引数は、 {{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} を `type` プロパティの値に応じて指定します。開発者はこれを使用して、セットアップ中にストリームを制御できます。
    - `pull` (controller) {{optional_inline}}
      - : このメソッドは、開発者が定義し、ストリームの内部にあるチャンクのキューがいっぱいになっていない場合、最高水準点に達するまで繰り返し呼び出されます。 `pull()` がプロミスを返す場合、そのプロミスが満たされるまで再び呼び出されません。プロミスが拒否された場合、ストリームはエラーになります。このメソッドに渡される `controller` 引数は、 {{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} を `type` プロパティの値に応じて指定します。開発者はこれを使用して、より多くのチャンクが読み取られるようストリームを制御できます。この関数は `start()` が完全に終了するまで呼び出されません。さらに、この関数は少なくとも一つのチャンクがキューに入れられるか、BYOB リクエストが履行された場合にのみ繰り返し呼び出されます。
    - `cancel` (reason) {{optional_inline}}
      - : このメソッドは、開発者が定義し、ストリームがキャンセルされることをアプリが通知した場合に呼び出されます（例えば、{{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。 このプロセスが非同期の場合、成功または失敗を通知するプロミスを返すことができます。 `reason` 引数には、ストリームがキャンセルされた理由を説明する文字列が含まれています。
    - `type` {{optional_inline}}
      - : このプロパティは、どの種類の読み取り可能なストリームが処理されるかを制御します。 `"bytes"` に設定された値が含まれている場合、渡されるコントローラーオブジェクトは、 BYOB （独自のバッファーを持ち込む）/バイトストリームを処理できる {{domxref("ReadableByteStreamController")}} になります。 含まれていない場合、渡されるコントローラーは {{domxref("ReadableStreamDefaultController")}} になります。
    - `autoAllocateChunkSize` {{optional_inline}}

      - : バイトストリームの場合、開発者は `autoAllocateChunkSize` に正の整数値を設定して、ストリームの自動割り当て機能をオンにできます。
        これを設定すると、ストリームの実装は、必要なときに自動的に {{domxref("ReadableByteStreamController.byobRequest")}} に指定したサイズのビューバッファーを確保するようになります。

        既定の {{domxref("ReadableStreamDefaultReader")}} でゼロコピー転送を使用するためには、この設定をしなければなりません。
        設定されていない場合、既定のリーダーはデータをストリームしますが、 {{domxref("ReadableByteStreamController.byobRequest")}} は常に `null` となり、コンシューマーへの転送はストリーム内のキューを経由しなければなりません。

- `queuingStrategy` {{optional_inline}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つの引数が必要です。

    - `highWaterMark`
      - : 負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - `size(chunk)`
      - : 引数 `chunk` を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。

    > [!NOTE]
    > 独自のカスタム `queuingStrategy` を定義するか、このオブジェクト値に {{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスを使用できます。 `queuingStrategy` が指定されていない場合、使用される既定値は、最高水準点が 1 の `CountQueuingStrategy` と同じです。

### 返値

{{domxref("ReadableStream")}} オブジェクトのインスタンス。

### 例外

- {{jsxref("RangeError")}}
  - : 指定された `type` 値が、 `"bytes"` でも `undefined` でもない場合に発生します。

## 例

次の単純な例では、コンストラクターを使用して独自の `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにランダムなテキスト文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するために `cancel()` 関数も提供します。

ボタンを押すと、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // ストリームに文字列を追加
      controller.enqueue(string);

      // それを画面に表示
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", () => {
      clearInterval(interval);
      fetchStream();
      controller.close();
    });
  },
  pull(controller) {
    // この例では実際には pull は必要ありません
  },
  cancel() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    clearInterval(interval);
  },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream")}}
- {{domxref("ReadableByteStreamController")}}
- {{domxref("ReadableStreamDefaultController")}}
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
