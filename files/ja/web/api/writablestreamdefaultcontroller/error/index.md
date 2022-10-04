---
title: WritableStreamDefaultController.error()
slug: Web/API/WritableStreamDefaultController/error
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultController")}} インターフェイスの **`error()`** メソッドにより、関連するストリームとの今後のやり取りがエラーになります。

通常、基になるシンクのメソッドの 1 つから拒否された promise を返すだけで十分なため、このメソッドはほとんど使用されません。 ただし、基になるシンクとのやり取りの通常のライフサイクル外のイベントに応答して、ストリームを突然シャットダウンする場合に役立ちます。

## 構文

```
writableStreamDefaultController.error(e);
```

### パラメーター

- e
  - : 今後のやり取りを失敗させたいエラーを表す {{domxref("DOMString")}}。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : エラーにしようとしているストリームは {{domxref("WritableStream")}} ではありません。

## 例

```js
const writableStream = new WritableStream({
  start(controller) {
    // コントローラーで何かをする

    // 必要に応じてストリームをエラーにする
    controller.error('My error is broken');
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

| 仕様                                                                                 | 状態                         | コメント |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#ws-default-controller-error","error()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultController.error")}}
