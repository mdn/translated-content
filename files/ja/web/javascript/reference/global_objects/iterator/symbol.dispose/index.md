---
title: Iterator.prototype[Symbol.dispose]()
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

**`[Symbol.dispose]()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、
disposable プロトコルを実装し、{{jsxref("Statements/using", "using")}} と共に使用された際に破棄することができます。存在する場合、`this` の `return()` メソッドを呼び出します。

## 構文

```js-nolint
iterator[Symbol.dispose]()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### イテレーターを `using` と共に宣言

`Symbol.dispose` メソッドは、`using` 宣言内で自動的に呼び出されるためのものです。これを使用すると、`next()` メソッドを手動で呼んで反復処理を行うイテレーターがある場合に便利です。 {{jsxref("Statements/for...of", "for...of")}} や類似の構文で反復処理を行う場合、エラー処理とクリーンアップが自動的に行われます。

```js
function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

function doSomething() {
  using numbers = generateNumbers();
  const res1 = numbers.next();
  // 残りの数値を反復処理しない
  // 関数が終了する前に、非同期イテレーターは破棄される
  // "Cleaning up" とログ出力
}

doSomething();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype[Symbol.dispose]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
