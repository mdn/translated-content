---
title: WritableStreamDefaultWriter.abort()
slug: Web/API/WritableStreamDefaultWriter/abort
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`abort()`** メソッドはストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに書き込まれた書き込みを破棄してすぐにエラー状態に移行することを通知します。

ライターがアクティブな場合、`abort()` メソッドは、関連するストリーム（{{domxref("WritableStream.abort()")}}）と同じように振る舞います。 そうでない場合、拒否された promise を返します。

## 構文

```
var promise = writableStreamDefaultWriter.abort(reason);
```

### パラメーター

- reason {{optional_inline}}
  - : 人間が読むことができる中止の理由を提供する {{domxref("DOMString")}}。

### 戻り値

{{jsxref("Promise")}}。 `reason` パラメーターで指定された値で満たされます。

### 例外

- TypeError
  - : 中止しようとしているストリームは {{domxref("WritableStream")}} ではないか、ロックされています。

## 例

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

...

// 必要に応じてストリームを中止します
writer.abort.then((reason) => {
  console.log(reason);
})
```

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#default-writer-abort","abort()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.abort")}}
