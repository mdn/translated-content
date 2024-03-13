---
title: "WritableStreamDefaultWriter: closed プロパティ"
short-title: closed
slug: Web/API/WritableStreamDefaultWriter/closed
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`closed`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスの読み取り専用プロパティで、ストリームが閉じられた場合、またはライターのロックが解除された場合に満たし、ストリームがエラーの場合に拒否する {{jsxref("Promise")}} を返します。

## 値

{{jsxref("Promise")}} です。

## 例

```js
const writableStream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {
      // ...
    },
    close(controller) {
      // ...
    },
    abort(err) {
      // ...
    },
  },
  queuingStrategy,
);

// ...

const writer = writableStream.getWriter();

// ..

// ストリームが閉じているかどうかを確認します
writer.closed.then(() => {
  console.log("writer closed");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
