---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - inArray
  - in_array
  - ポリフィル
browser-compat: javascript.builtins.Array.includes
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
---
{{JSRef}}

**`includes()`** メソッドは、特定の要素が配列に含まれているかどうかを `true` または `false` で返します。

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## 構文

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### 引数

- `searchElement`

  - : 検索する値です。

    > **Note:** 文字列や文字を比較する場合、`includes()` は*大文字と小文字を区別します*。

- `fromIndex` {{optional_inline}}

  - : `searchElement` の検索を始める配列内の位置です。

    検索される最初の要素は、`fromIndex` が正の値の場合は `fromIndex` の位置に、`fromIndex` が負の値の場合は `arr.length + fromIndex` の位置になります (検索を開始する配列の端からの要素数として fromIndex の{{interwiki("wikipedia", "絶対値")}}を使用します)。

    既定値は `0` です。

### 返値

論理型で、`searchElement` の値が配列内 (`fromIndex` が指定されていた場合は、配列のその位置以降の部分) にあった場合は `true` を返します。

ゼロの値は符号に関わらず、すべて等しいとみなされます (すなわち、`-0` は `0` とも `+0` 友等しいとみなされます) が、`false` は `0` と同じとはみなされ*ません*。

> **Note:** 技術的に言えば、`includes()` は [`sameValueZero`](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) アルゴリズムを使用して、指定された要素が見つかったかどうかを確認しています。

## 例

```js
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```

### `fromIndex` が配列の長さと同じか大きい場合

`fromIndex` が配列の長さと同じか大きい場合は、配列を検索せずに `false` を返します。

```js
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
```

### 計算された位置が 0 より小さい場合

`fromIndex` が負の値である場合、`searchElement` の検索を開始するための配列内の位置として、計算により位置が算出されます。計算された位置が `0` 以下の場合は、配列全体が検索されます。

```js
// 配列の長さは 3
// fromIndex は -100
// 補正されたインデックスは 3 + (-100) = -97

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
```

### ジェネリックメソッドとして使用される includes()

`includes()` メソッドは意図的にジェネリックになっています。`this` が Array オブジェクトであることは必須ではないので、他の種類のオブジェクト (例えば配列風オブジェクト) にも適用することができます。

以下の例は、`includes()` メソッドが関数の [arguments](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトに対して使用される様子を示しています。

```js
(function() {
  console.log(Array.prototype.includes.call(arguments, 'a'))  // true
  console.log(Array.prototype.includes.call(arguments, 'd'))  // false
})('a','b','c') 
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Array.prototype.includes` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-array) で利用できます
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
