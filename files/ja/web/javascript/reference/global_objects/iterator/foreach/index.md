---
title: Iterator.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

**`forEach()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、 {{jsxref("Array.prototype.forEach()")}} と似ています。指定された関数を、イテレーターによって生成されたそれぞれの要素に対して 1 回ずつ指定された関数を実行します。

## 構文

```js-nolint
forEach(callbackFn)
```

### 引数

- `callbackFn`
  - : イテレーターによって生成された各要素に対して実行する関数。その返値は破棄されます。関数は次の引数で呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

{{jsxref("undefined")}} です。

## 解説

`forEach()` はイテレーターを反復処理し、それぞれの要素に対して一度ずつ `callbackFn` 関数を呼び出します。 他のほとんどのイテレーターヘルパーメソッドとは異なり、これは遅延的ではないため、無限イテレーターでは動作しません。

## 例

### forEach() の使用

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// ログ出力:
// 1
// 2
// 3
```

これは次のものと同等です。

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
