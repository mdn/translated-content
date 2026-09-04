---
title: AsyncDisposableStack.prototype.defer()
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

{{jsxref("AsyncDisposableStack")}} インスタンスの **`defer()`** メソッドは、スタックが破棄されるときに呼び出され、その完了が待機されるコールバック関数を受け取ります。

`defer()` メソッドの一般的な情報については、 {{jsxref("DisposableStack.prototype.defer()")}} を参照してください。

## 構文

```js-nolint
defer(onDispose)
```

### 引数

- `onDispose`
  - : スタックが破棄されるときに呼び出される関数です。この関数は引数を受け取らず、プロミスを返すこともでき、その場合は待機されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `onDispose` が関数でない場合にスローされます。
- {{jsxref("ReferenceError")}}
  - : スタックがすでに破棄されている場合にスローされます。

## 例

### defer() の使用

`defer()` の用途の一つは、スコープを抜けるときにリソースの解放とは関係のない処理（例えばメッセージのログ出力）を行うことです。

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  disposer.defer(async () => {
    await fs.writeFile("log.txt", "All resources freed successfully");
  });
  // 他のコード (さらにデータを確保して解放する処理)
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
