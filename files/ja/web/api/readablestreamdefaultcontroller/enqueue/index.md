---
title: "ReadableStreamDefaultController: enqueue() メソッド"
short-title: enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`enqueue()`** は {{domxref("ReadableStreamDefaultController")}} インターフェイスのメソッドで、受け取ったのチャンクを関連するストリームのキューに入れます。

## 構文

```js-nolint
enqueue(chunk)
```

### 引数

- `chunk`
  - : キューに入れるチャンク。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableStreamDefaultController` ではありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます — `controller.enqueue(string)` を参照。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancel()` 関数も提供します。

ボタンが押されると、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
let interval;
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

- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
