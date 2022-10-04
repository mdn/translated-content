---
title: ReadableStreamDefaultController.ReadableStreamDefaultController()
slug: orphaned/Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController
original_slug: Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController
---

{{APIRef("Streams")}}

**`ReadableStreamDefaultController()`** コンストラクターは、`ReadableStreamDefaultController` オブジェクトのインスタンスを作成して返します。

> **メモ:** このコンストラクターを手動で使用することはありません — これは、{{domxref("ReadableStream")}} オブジェクトの構築中に使用されます。

## 構文

```
var readableStreamDefaultController = new ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark);
```

### パラメーター

- stream
  - : 制御される {{domxref("ReadableStream")}}。
- underlyingSource
  - : 構築されたストリームインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 詳細については、[`ReadableStream()` コンストラクターのパラメーター定義](/ja/docs/Web/API/ReadableStream/ReadableStream#Parameters)を参照してください。
- size
  - : パラメーター `chunk` を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。
- highWaterMark
  - : 負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。

### 戻り値

{{domxref("ReadableStreamDefaultController")}} オブジェクトのインスタンス。

### 例外

- TypeError
  - : 指定された `stream` パラメーターは {{domxref("ReadableStream")}} ではないか、既にコントローラーが関連付けられています。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancel()` 関数も提供します。

{{domxref("ReadableStreamDefaultController")}} オブジェクトは、`start()` 関数および `pull()` 関数のパラメーターとして提供されることに注意してください。

ボタンが押されると、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

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

| 仕様                                                                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-default-controller-constructor","ReadableStreamDefaultController()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController.ReadableStreamDefaultController")}}
