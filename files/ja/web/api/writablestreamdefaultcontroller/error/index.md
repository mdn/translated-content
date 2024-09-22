---
title: "WritableStreamDefaultController: error() メソッド"
short-title: error()
slug: Web/API/WritableStreamDefaultController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

{{domxref("WritableStreamDefaultController")}} インターフェイスの **`error()`** メソッドにより、関連するストリームとの今後のやり取りがエラーになります。

通常、基になるシンクのメソッドの 1 つから拒否されたプロミスを返すだけで十分なため、このメソッドはほとんど使用されません。 ただし、基になるシンクとのやり取りの通常のライフサイクル外のイベントに応答して、ストリームを突然シャットダウンする場合に役立ちます。

## 構文

```js-nolint
error(message)
```

### 引数

- `message`
  - : 文字列で、将来の操作を失敗するようにしたいエラーを表します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : エラーにしようとしているストリームは {{domxref("WritableStream")}} ではありません。

## 例

```js
const writableStream = new WritableStream({
  start(controller) {
    // コントローラーで何かをする

    // 必要に応じてストリームをエラーにする
    controller.error("My error is broken");
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
