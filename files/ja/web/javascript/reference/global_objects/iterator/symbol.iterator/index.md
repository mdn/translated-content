---
title: Iterator.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.iterator]()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実行し、組み込みイテレーターが反復可能オブジェクトを期待する大部分の構文、例えば[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなどで利用できるようにします。これは [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値、すなわちイテレーターオブジェクト自身を返します。

## 構文

```js-nolint
iterator[Symbol.iterator]()
```

### 引数

なし。

### 返値

[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値、すなわちイテレーターオブジェクト自身です。

## 例

### for...of ループを使用した反復処理

このメソッドを直接呼び出す必要はめったにないことに注意してください。 `[Symbol.iterator]()` メソッドの存在により、組み込みのイテレーターはすべて[反復可能] (/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)となり、`for...of` ループのような反復処理構文はループオーバーするために自動的にこのメソッドを呼び出してイテレーターを取得します。

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// ログ: 1, 2, 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Iterator")}}
- {{jsxref("Symbol.iterator")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
