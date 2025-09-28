---
title: Math.sumPrecise()
short-title: sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.sumPrecise()`** は静的メソッドで、数値の反復可能オブジェクトを受け取り、それらの和を返します。ループで合計するよりも精度が高く、中間結果における浮動小数点精度の損失を回避します。

{{InteractiveExample("JavaScript Demo: Math.sumPrecise()")}}

```js interactive-example
console.log(Math.sumPrecise([1, 2]));
// 予想される結果: 3

console.log(Math.sumPrecise([1e20, 0.1, -1e20]));
// 予想される結果: 0.1
```

## 後部餡

```js-nolint
Math.sumPrecise(numbers)
```

### 引数

- `numbers`
  - : 数値の[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）。

### 返値

`numbers` 反復可能オブジェクト内の数値の和となる数値。反復可能オブジェクトが空の場合、返値は `-0` となります（0 ではありません）。

### 例外

- {{jsxref("TypeError")}}
  - : `numbers` が反復可能でない場合、または反復可能オブジェクト内のいずれかの値が数値型でない場合。

## 解説

`sumPrecise()` は `Math` の静的メソッドであるため、常に `Math.sumPrecise()` として使用します。作成した `Math` オブジェクトのメソッドとして使用することはできません（`Math` はコンストラクターではありません）。

このメソッドは `Math.sumPrecise()` と呼ばれます。なぜなら、単純なループで数値を合計するよりも精度が高いからです。次の例を考えてみましょう。

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

出力は 0 です。これは `1e20 + 0.1` が 64 ビット浮動小数点数で正確に表現できないため、中間結果が `1e20` に丸められるからです。その後、`1e20` と `-1e20` の和は `0` となるため、最終結果は `0` となります。

`Math.sumPrecise()` は、特殊な加算アルゴリズムを使用することでこの問題を回避します。浮動小数点数がその正確な数学的値を用いて加算され、最終結果が表現可能な 64 ビット浮動小数点数に最も近い値に変換されるかのように動作します。ただし、これでも `0.1 + 0.2` の精度問題は回避できません。

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

浮動小数点リテラル `0.1` と `0.2` は既に `0.1` や `0.2` よりも大きな数学的値を表しており、それらの和の最も近い 64 ビット浮動小数点表現は実際には `0.30000000000000004` であるためです。

## 例

### Math.sumPrecise() の使用

```js
console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.sumPrecise` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#mathsumprecise)
- [es-shims による `Math.sumPrecise` のポリフィル](https://www.npmjs.com/package/math.sumprecise)
- {{jsxref("Array.prototype.reduce()")}}
