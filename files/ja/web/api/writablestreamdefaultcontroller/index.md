---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
---

{{SeeCompatTable}}{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`WritableStreamDefaultController`** インターフェイスは、{{domxref("WritableStream")}} の状態を制御できるコントローラーを表します。 `WritableStream` を構築する場合、基になるシンクには、対応する `WritableStreamDefaultController` インスタンスが与えられて操作します。

## コンストラクター

なし。 `WritableStreamDefaultController` インスタンスは、`WritableStream` の構築中に自動的に作成されます。

## プロパティ

なし。

## メソッド

- {{domxref("WritableStreamDefaultController.error()")}}
  - : 関連するストリームとの今後のやり取りでエラーが発生します。

## 例

```js
const writableStream = new WritableStream({
  start(controller) {
    // コントローラーで何かをする

    // 必要に応じてストリームをエラーにする
    controller.error('My stream is broken');
  },
  write(chunk, controller) {
    ...
  },
  close(controller) {
    ...
  },
  abort(err) {
    ...
  }
});
```

## 仕様

| 仕様                                                                                                                 | 状態                         | コメント |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#ws-default-controller-class','WritableStreamDefaultController')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultController")}}
