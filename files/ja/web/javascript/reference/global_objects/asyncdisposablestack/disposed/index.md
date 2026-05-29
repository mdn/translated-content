---
title: AsyncDisposableStack.prototype.disposed
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`disposed`** アクセサープロパティは、以下のいずれかの操作によってこの `AsyncDisposableStack` が破棄または移動されたかどうかを示すブール値を返します。

- {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}} メソッドを呼び出した場合
- {{jsxref("AsyncDisposableStack/move", "move()")}} メソッドを呼び出した場合
- {{jsxref("Statements/await_using", "await using")}} を使って宣言され、変数がスコープ外に出た場合 (このとき、[`[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) メソッドが自動的に呼び出されます)

## 例

### スタックが破棄されているかどうかの確認

```js
const disposer = new AsyncDisposableStack();
console.log(disposer.disposed); // false
await disposer.disposeAsync();
console.log(disposer.disposed); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
