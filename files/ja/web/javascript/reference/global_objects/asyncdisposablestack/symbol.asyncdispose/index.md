---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`[Symbol.asyncDispose]()`** メソッドは、非同期破棄プロトコルを実装し、{{jsxref("Statements/await_using", "await using")}} とともに使用されたときに オブジェクトを破棄できるようにします。これは、{{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}} メソッドのエイリアスです。

## 構文

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `await using` によるスタックの宣言

`Symbol.asyncDispose` メソッドは、 `await using` 宣言内で自動的に呼び出されることを意図しています。

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // 関数の終了直前にディスポーザーが破棄され、
  // それによりリソースも破棄されます
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
