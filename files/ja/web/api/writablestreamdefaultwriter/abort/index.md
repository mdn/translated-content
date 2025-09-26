---
title: "WritableStreamDefaultWriter: abort() メソッド"
short-title: abort()
slug: Web/API/WritableStreamDefaultWriter/abort
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`abort()`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスのメソッドで、ストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに書き込まれた書き込みを破棄してすぐにエラー状態に移行することを通知します。

ライターがアクティブな場合、`abort()` メソッドは、関連するストリーム（{{domxref("WritableStream.abort()")}}）と同じように振る舞います。 そうでない場合、拒否されたプロミスを返します。

## 構文

```js-nolint
abort()
abort(reason)
```

### 引数

- `reason` {{optional_inline}}
  - : 文字列で、人間が読むことができる中止の理由を表します。

### 返値

{{jsxref("Promise")}} です。 `reason` 引数で指定された値で履行されます。

### 例外

- {{jsxref("TypeError")}}
  - : 中止しようとしているストリームが {{domxref("WritableStream")}} ではないか、ロックされている場合。

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

// 必要に応じてストリームを中止します
writer.abort.then((reason) => {
  console.log(reason);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
