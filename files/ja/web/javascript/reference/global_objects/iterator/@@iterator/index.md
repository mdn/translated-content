---
title: Iterator.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator
l10n:
  sourceCommit: ab97df6ce8865569507bcfc884206a1ed297a690
---

{{JSRef}}

**`[@@iterator]()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実行し、組み込みイテレーターが反復可能オブジェクトを期待する大部分の構文、例えば[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなどで利用できるようにします。これは [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値、すなわちイテレーターオブジェクト自身を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## 構文

```js-nolint
iterator[Symbol.iterator]()
```

### 返値

[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値、すなわちイテレーターオブジェクト自身です。

## 例

### for...of ループを使用した反復処理

このメソッドを直接呼び出す必要はめったにないことに注意してください。`iterator` メソッドの存在により、組み込みのイテレーターはすべて[反復可能] (/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)となり、`for...of` ループのような反復処理構文はループオーバーするために自動的にこのメソッドを呼び出してイテレーターを取得します。

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

- {{jsxref("Statements/for...of", "for...of")}}
