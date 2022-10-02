---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`at()`** メソッドは整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。負の整数は、配列の最後の項目から前へ数えます。

これは、角括弧記法を使用することに何らかの問題があることを示唆しているわけではありません。例えば、 `array[0]` は最初の項目を返します。しかし、後方の項目、例えば最後の項目には {{jsxref('Array.prototype.length','array.length')}} を使用する代わりに、 `array.at(-1)` を呼び出すことで取得することができます。[（以下の例を参照してください）](#例)

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## 構文

```js
at(index)
```

### 引数

- `index`
  - : 返される配列要素の添字（位置）。負の添字を使用した場合は、配列の末尾からの相対位置指定に対応しています。 つまり、負の数を使用した場合は、配列の末尾から数えて返される要素を見つけることになります。

### 返値

指定された位置に一致する配列の要素。指定された位置が見つからない場合は {{jsxref('undefined')}} を返します。

## 例

### 配列の末尾の値を返す

以下の例は、指定された配列の中で最後に見つかった要素を返す関数を提供します。

```js
// 項目付きの配列
const cart = ['りんご', 'バナナ', 'なし'];

// 指定された配列の最後の項目を返す関数
function returnLast(arr) {
  return arr.at(-1);
}

// 配列 'cart' の最後の項⽬を取得する
const item1 = returnLast(cart);
console.log(item1); // 出力: 'なし'

// 配列 'cart' に商品を追加
cart.push('みかん');
const item2 = returnLast(cart);
console.log(item2); // 出力: 'みかん'
```

### 比較メソッド

この例では、 {{jsxref('Array')}} の最後から 1 つ目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、この例では `at()` メソッドの簡潔さと読みやすさを強調しています。

```js
// 項目付きの配列
const colors = ['red', 'green', 'blue'];

// length プロパティの使用
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // 出力: 'green'

// slice() メソッドを使用。配列を返すことに注意。
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 出力: 'green'

// at() メソッドを使用
const atWay = colors.at(-2);
console.log(atWay); // 出力: 'green'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.at` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#relative-indexing-method)
- [at() メソッドのポリフィル](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – 指定されたテストに基づく値を返します。
- {{jsxref("Array.prototype.includes()")}} – 配列に値が存在するかどうかを判定します。
- {{jsxref("Array.prototype.indexOf()")}} – 指定された要素の添字を返します。
