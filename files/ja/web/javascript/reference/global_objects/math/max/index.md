---
title: Math.max()
short-title: max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Math.max()`** は静的メソッドで、入力引数として与えられた数値のうち最大の値を返します。引数がなかった場合は -{{jsxref("Infinity")}} を返します。

{{InteractiveExample("JavaScript デモ: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// 予想される結果: 3

console.log(Math.max(-1, -3, -2));
// 予想される結果: -1

const array = [1, 3, 2];

console.log(Math.max(...array));
// 予想される結果: 3
```

## 構文

```js-nolint
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* … ,*/ valueN)
```

### 引数

- `value1`, …, `valueN`
  - : 最大値を選択して返すための、 0 個以上の数値です。

### 返値

与えられた数のうちの最大の値です。何れかの引数が {{jsxref("NaN")}} であるか、それに変換された場合は `NaN` を返します。引数が与えられなかった場合は -{{jsxref("Infinity")}} を返します。

## 解説

`max()` は `Math` の静的メソッドですので、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.max()` として使用してください（`Math` はコンストラクターではありません）。

[`Math.max.length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) は 2 であり、最低でも 2 つの引数を処理するよう設計されていることを示唆しています。

## 例

### Math.max() の使用

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### 配列の最大値の取得

{{jsxref("Array.prototype.reduce()")}} を使用して、数値の配列の中にある最大値の要素を、それぞれの値を比較して探し出すことができます。

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

次の関数では {{jsxref("Function.prototype.apply()")}} を使用して配列の最大値を取得します。 `getMaxOfArray([1, 2, 3])` は `Math.max(1, 2, 3)` と同等ですが、 `getMaxOfArray()` はプログラム的に構築された配列に使用することができます。これは比較的要素が少ない配列に対して使用してください。

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

新しい[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)で、 `apply` によって配列の最大値を得る方法をより短く書くことができます。

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

しかし、スプレッド構文の (`...`) と `apply` のどちらも、配列に膨大な要素があった場合は、配列の要素を関数の引数として渡そうとするため、失敗したり、誤った結果を返したりすることがあります。詳しくは [apply を組み込み関数と共に利用する](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#apply_をビルトイン関数と共に利用する)を参照してください。 `reduce` の方法はこの問題が発生しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.min()")}}
