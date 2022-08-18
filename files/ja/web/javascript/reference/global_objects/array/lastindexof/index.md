---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---
{{JSRef}}

**`lastIndexOf()`** メソッドは、配列中で与えられた要素が見つかった最後の添字を返します。もし存在しなければ -1 を返します。配列は `fromIndex` から逆向きに検索されます。

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## 構文

```
arr.lastIndexOf(searchElement[, fromIndex])
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}
  - : 逆向きに検索し始める添字です。デフォルトは配列の長さ に 1 を引いた値（ `arr.length - 1` ）で、つまり配列全体が検索されます。もしこの添字が配列の長さ以上ならば、配列全体が検索されます。負の数の場合、これは配列の終わりからのオフセットとみなされます。この添字が負の数であってもなお、配列は後ろから前に検索されることに注意してください。負の添字の絶対値が配列の長さを超えた場合、-1 が返され、配列は検索されません。

### 返値

配列内の一致した要素の最後の位置です。見つからなかった場合は **-1** です。

## 解説

`lastIndexOf` は `searchElement` と配列の要素を [厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (三重イコール演算子 `===` で使われるのと同じ方法) を使って比較します。

## 例

### lastIndexOf() の使用

`lastIndexOf` を使って配列中のある値の位置を探す例を以下に示します。

```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

### ある要素の存在をすべて見つける

以下の例は `lastIndexOf` を使って、与えられた配列中のある値の添字すべてを探しています。{{jsxref("Array.prototype.push", "push")}} を使って、値が見つかる度に別の配列にその添字を追加しています。

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
```

ここで `idx == 0` の場合を分けて扱わないといけないことに注意してください。なぜなら、もし検索する値が配列の最初の要素にあると、その値は `fromIndex` パラメータにかかわらずいつもヒットしてしまうのです。これは {{jsxref("Array.prototype.indexOf", "indexOf")}} メソッドとは異なります。

## ポリフィル

`lastIndexOf` は ECMA-262 第 5 版に追加されたメソッドであり、他のバージョンの標準実装には存在しない場合があります。次のコードをスクリプトの先頭に追加することにより、`lastIndexOf` がネイティブでサポートされていない環境でも、これを使用する事が可能となります。これは ECMA-262 第 5 版で定められたアルゴリズムと全く同じものです。 {{jsxref("Object")}}、{{jsxref("TypeError")}}、{{jsxref("Number")}}、{{jsxref("Math.floor")}}、{{jsxref("Math.abs")}}、{{jsxref("Math.min")}} が、それぞれオリジナルの値を持つことを仮定しています。

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

上記コードのアルゴリズムは Firefox または SpiderMonky の JavaScript エンジンで実際に使用されているものと同じもので、これには間違いなくエッジケースも含まれています。実際にアプリケーションの中でこれを使用する場合、こうしたエッジケースを無視するならば、より複雑でないコードで `fromIndex` を計算可能であるかもしれません。

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.lastIndexOf")}}

## 関連情報

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
