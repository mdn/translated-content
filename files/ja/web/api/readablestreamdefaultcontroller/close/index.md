---
title: ReadableStreamDefaultController.close()
slug: Web/API/ReadableStreamDefaultController/close
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} インターフェイスの **`close()`** メソッドは、関連するストリームを閉じます。

リーダーは、以前にキューに入れられたチャンクをストリームから読み取ることができますが、それらを読み取とってしまうとストリームは閉じられます。 ストリームを完全に取り除き、キューに入れられたチャンクを破棄する場合は、{{domxref("ReadableStream.cancel()")}} または {{domxref("ReadableStreamDefaultReader.cancel()")}} を使用します。

## 構文

```
readableStreamDefaultController.close();
```

### パラメーター

なし。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトは `ReadableStreamDefaultController` ではありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `ReadableStream` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 `start()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancel()` 関数も提供します。

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

| 仕様                                                                                 | 状態                         | コメント |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-default-controller-close","close()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController.close")}}
