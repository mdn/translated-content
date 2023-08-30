---
title: ReadableStreamDefaultController.enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} インターフェイスの **`enqueue()`** メソッドは、所与のチャンクを関連するストリームのキューに入れます。

## 構文

```
readableStreamDefaultController.enqueue(chunk);
```

### パラメーター

- _chunk_
  - : キューに入れるチャンク。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトは `ReadableStreamDefaultController` ではありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます — `controller.enqueue(string)` を参照。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancel()` 関数も提供します。

ボタンが押されると、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

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

    button.addEventListener("click", function () {
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

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController.enqueue")}}
