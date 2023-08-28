---
title: ReadableStreamDefaultReader.closed
slug: Web/API/ReadableStreamDefaultReader/closed
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} インターフェイスの **`closed`** 読み取り専用プロパティは、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たし、ストリームがエラーの場合に拒否する promise を返します。

## 構文

```
var closed = readableStreamDefaultReader.closed;
```

### 値

{{jsxref("Promise")}}。

## 例

このスニペットでは、以前に作成したリーダーに問い合わせて、ストリームが閉じられているかどうかを確認します。 閉じられると、promise が満たされ、メッセージをコンソールに記録します。

```js
reader.closed.then(() => {
  console.log("reader closed");
});
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultReader.closed")}}
