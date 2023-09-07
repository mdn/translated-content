---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`at()`** メソッドは整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。負の整数は、配列の最後の項目から前へ数えます。

これは、角括弧記法を使用することに何らかの問題があることを示唆しているわけではありません。例えば、 `array[0]` は最初の項目を返します。しかし、後方の項目、例えば最後の項目には {{jsxref('Array.prototype.length','array.length')}} を使用する代わりに、 `array.at(-1)` を呼び出すことで取得することができます。[（下記の例を参照してください）](#例)

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## 構文

```js-nolint
at(index)
```

### 引数

- `index`
  - : 返される配列要素の添字（位置）。負の添字を使用した場合は、配列の末尾からの相対位置指定に対応しています。つまり、負の数を使用した場合は、配列の末尾から数えて返される要素を見つけることになります。

### 返値

指定された位置に一致する配列の要素です。指定された位置が見つからない場合は {{jsxref('undefined')}} を返します。

## 例

### 型付き配列の最後の値を返す

次の例は、指定した配列の中で最後に見つかった要素を返す関数を提供する例です。

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// 指定された配列の最後の項目を返す関数です。
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### メソッドの比較

ここでは、{{jsxref('TypedArray')}} の最後から 2 番目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
// Our typed array with values
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Using length property
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// Using slice() method. Note an array is returned
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// Using at() method
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.at` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#relative-indexing-method)
- [at() メソッドのポリフィル](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("TypedArray.prototype.find()")}} – 指定されたテストに基づき値を返す。
- {{jsxref("TypedArray.prototype.includes()")}} – 値が配列内にあるかどうかを調べて返す。
- {{jsxref("TypedArray.prototype.indexOf()")}} – 指定された要素のインデックスを返す。
