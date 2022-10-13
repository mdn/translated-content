---
title: WritableStreamDefaultWriter.closed
slug: Web/API/WritableStreamDefaultWriter/closed
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`closed`** 読み取り専用プロパティは、ストリームが閉じられた場合、またはライターのロックが解除された場合に満たし、ストリームがエラーの場合に拒否する promise を返します。

## 構文

```
var closed = writableStreamDefaultWriter.closed;
```

### 値

{{jsxref("Promise")}}。

## 例

```js
const writableStream = new WritableStream({
  start(controller) {
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
}, queuingStrategy);

...

const writer = writableStream.getWriter();

..

// ストリームが閉じているかどうかを確認します
writer.closed.then(() => {
  console.log('writer closed');
})
```

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#default-writer-closed","closed")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.closed")}}
