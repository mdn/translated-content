---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
---

{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`ReadableStreamDefaultController`** インターフェイスは、{{domxref("ReadableStream")}} の状態と内部キューを制御できるコントローラーを表します。 デフォルトのコントローラーは、バイトストリームではないストリーム用です。

## コンストラクター

なし。 `ReadableStreamDefaultController` インスタンスは、`ReadableStream` の構築中に自動的に作成されます。

## プロパティ

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{readonlyInline}}
  - : ストリームの内部キューを満たすために必要な希望サイズを返します。

## メソッド

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : 関連するストリームを閉じます。
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : 所与のチャンクを関連するストリームのキューに入れます。
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : 関連するストリームとの今後のやり取りでエラーを発生させます。

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

| 仕様                                                                                                                 | 状態                         | コメント |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#rs-default-controller-class','ReadableStreamDefaultController')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController")}}
