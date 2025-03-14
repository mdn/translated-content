---
title: "WritableStreamDefaultWriter: releaseLock() メソッド"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`releaseLock()`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスのメソッドで、対応するストリームのライターのロックを解除します。 ロックを解除すると、ライターはアクティブではなくなります。 ロックを解除したときに関連するストリームにエラーが発生した場合、ライターはこれ以降同じようにエラーが発生したように見えます。 そうでない場合、ライターは閉じられたように見えます。

## 構文

```js-nolint
releaseLock()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // ...
    },
    close() {
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

// ...

// 必要に応じて、ストリームのライターのロックを解除します
writer.releaseLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
