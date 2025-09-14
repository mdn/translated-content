---
title: arguments[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Functions/arguments/Symbol.iterator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`[Symbol.iterator]()`** は {{jsxref("Functions/arguments", "arguments")}} オブジェクトのメソッドで、[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装し、 `arguments` オブジェクトが反覆可能を期待するほとんどの構文（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなど）で利用できるようにするためのものです。これは、 `arguments` オブジェクトのそれぞれのインデックスの値を返す [配列イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator) を返します。

このプロパティの初期値は、 {{jsxref("Array.prototype.values")}} プロパティの初期値と同じ関数オブジェクトです（また、[`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) とも同じです）。

## 構文

```js-nolint
arguments[Symbol.iterator]()
```

### 引数

なし。

### 返値

{{jsxref("Array.prototype.values()")}} と同じ返値です。 `arguments` オブジェクトのそれぞれのインデックスの値を返す新しい[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### for...of ループを用いた反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`[Symbol.iterator]()` メソッドが存在するので、 `arguments` オブジェクトは[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)であり、`for...of` ループなどの同様に反復可能な構文は自動的にこのメソッドを呼び出し、ループ処理用のイテレーターを取得します。

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

### イテレーターを手動で手繰る

返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すことで、反復処理を最大限に制御することもできます。

```js
function f() {
  const argsIter = arguments[Symbol.iterator]();
  console.log(argsIter.next().value); // w
  console.log(argsIter.next().value); // y
  console.log(argsIter.next().value); // k
  console.log(argsIter.next().value); // o
  console.log(argsIter.next().value); // p
}
f("w", "y", "k", "o", "p");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
