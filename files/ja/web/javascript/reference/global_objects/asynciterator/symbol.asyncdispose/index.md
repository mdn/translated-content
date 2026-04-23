---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

{{jsxref("AsyncIterator")}} インスタンスの **`[Symbol.asyncDispose]()`** メソッドは、_非同期破棄プロトコル_ を実装しており、{{jsxref("Statements/await_using", "await using")}} とともに使用したときに、そのインスタンスを破棄できるようにします。このメソッドは、`this` の `return()` メソッドが存在する場合、それを呼び出してその結果を待機します。

## 構文

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `await using` を用いた非同期イテレーターの宣言

`Symbol.asyncDispose` メソッドは、`await using` 宣言内で自動的に呼び出されることを想定しています。これは、`next()` メソッドを呼び出して手動で反復処理を行う非同期イテレーターがある場合に便利です。{{jsxref("Statements/for-await...of", "for await...of")}} などで反復処理を行う場合は、エラー処理やクリーンアップは自動的に行われます。

```js
async function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

async function doSomething() {
  await using numbers = generateNumbers();
  const res1 = await numbers.next();
  // 残りの値は反復処理していません
  // 関数の終了前に、この非同期イテレーターは破棄されます
  // 「Cleaning up」とログに出力されます
}

doSomething();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`AsyncIterator.prototype[Symbol.asyncDispose]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
