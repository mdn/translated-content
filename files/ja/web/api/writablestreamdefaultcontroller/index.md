---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: 6a852f07c0b077df0d7b82d3eff99837fc6eff36
---

{{APIRef("Streams")}}

**`WritableStreamDefaultController`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、{{domxref("WritableStream")}} の状態を制御できるコントローラーを表します。 `WritableStream` を構築する場合、基になるシンクには、操作のために対応する `WritableStreamDefaultController` インスタンスが与えられます。

## コンストラクター

なし。 `WritableStreamDefaultController` インスタンスは、`WritableStream` の構築中に自動的に作成されます。

## インスタンスプロパティ

- {{domxref("WritableStreamDefaultController.signal")}} {{ReadOnlyInline}}
  - : このコントローラーに関連付けられた {{domxref("AbortSignal")}} です。

## インスタンスメソッド

- {{domxref("WritableStreamDefaultController.error()")}}
  - : 関連するストリームとの今後のやり取りでエラーが発生します。

## 例

```js
const writableStream = new WritableStream({
  start(controller) {
    // コントローラーで何かをする

    // 必要に応じてストリームをエラーにする
    controller.error("My stream is broken");
  },
  write(chunk, controller) {
    // ...
  },
  close(controller) {
    // ...
  },
  abort(err) {
    // ...
  },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
