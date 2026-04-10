---
title: AsyncDisposableStack() コンストラクター
short-title: AsyncDisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

**`AsyncDisposableStack()`** コンストラクタは、{{jsxref("AsyncDisposableStack")}} オブジェクトを作成します。

## 構文

```js-nolint
new AsyncDisposableStack()
```

> [!NOTE]
> `AsyncDisposableStack()` は、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new)を使ってのみ構築できます。`new` を付けずに呼び出すと、{{jsxref("TypeError")}} が発生します。

### 引数

なし。

### 返値

新しい `AsyncDisposableStack` オブジェクト。

## 例

### AsyncDisposableStack の作成

```js
const disposer = new AsyncDisposableStack();
disposer.defer(() => console.log("Disposed!"));
await disposer.disposeAsync();
// ログ: Disposed!
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
