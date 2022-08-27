---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - indexof
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---
{{JSRef}}

**`indexOf()`** メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## 構文

```
arr.indexOf(searchElement[, fromIndex])
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}
  - : 検索を始める位置です。もしこの位置が配列の長さ以上の場合は、-1 が返され、配列は検索されません。負の数の場合、これは配列の末尾からのオフセットとみなされます。なお、この位置が負の数であっても、配列は前から後ろに検索されることに注意してください。指定された位置が 0 であれば、配列全体が検索されます。既定値は 0 (配列全体を検索) です。

### 返値

見つかった最初の配列要素の添字です。見つからなかった場合は **-1** です。

## 解説

`indexOf()` は `searchElement` と配列の要素を [厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (三重イコール演算子 `===` で使われるのと同じ方法) を使って比較します。

> **Note:** **メモ:** String メソッドについては、{{jsxref("String.prototype.indexOf()")}} を参照してください。

## 例

### indexOf() の使用

以下の例は `indexOf()` を使って、配列中のある値の位置を探しています。

```js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### ある要素の存在をすべて見つける

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 要素が配列内に存在するかどうかを調べ、配列を更新する

```js
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
```

## ポリフィル

`indexOf()` メソッドは ECMA-262 第 5 版で追加されたものであり、すべてのブラウザーで動作するわけではありません。次のコードをスクリプトの先頭に追加することにより、`indexOf()` がネイティブでサポートされていない環境でも、これが使用可能となります。これは ECMA-262 第 5 版で定められたアルゴリズムと完全に同じものです。{{jsxref("Global_Objects/TypeError", "TypeError")}} と {{jsxref("Math.abs()")}} がオリジナルの値を持つ事を仮定しています。

```js
// This version tries to optimize by only checking for "in" when looking for undefined and
// skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
// Whether it is actually faster remains to be seen.
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
      } else                          // all else
        for (; i !== Len; ++i) if (that[i] === member) return i

      return -1 // if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min)
```

ですが、ECMA 標準で定義された技術的な部分に興味があり、パフォーマンスや簡潔さを意識しない場合、以下のような、より説明的なポリフィルが役立つことがあるでしょう。

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    "use strict";
    var k;

    // 1. ToObject に this 値を引数として渡した結果を
    // o とします。
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. "length" を引数として o の Get 内部メソッドを呼んだ結果を
    //    lenValue とします。
    // 3. ToUint32(lenValue) を len とします。
    var len = o.length >>> 0;

    // 4. len が 0 の場合、-1 を返します。
    if (len === 0) {
      return -1;
    }

    // 5. n を fromIndex 引数が存在する場合は
    //   ToInteger(fromIndex)、存在しない場合は 0 とします。
    var n = fromIndex | 0;

    // 6. n が len 以上の場合 -1 を返します。
    if (n >= len) {
      return -1;
    }

    // 7. n が 0 以上の場合 k を n とします。
    // 8. n が 0 未満の場合 k を len - abs(n) とします。
    //    k が 0 未満の場合 k を 0 とします。
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. k が len 未満の間は以下を繰り返します。
    for (; k < len; k++) {
      // a. Pk を ToString(k) とします。
      //   これは暗黙的に in 演算子の左辺値です。
      // b. kPresent を Pk を引数として o の
      //    HasProperty 内部メソッドを呼んだ結果とします。
      //   このステップは c と組み合わせることができます。
      // c. kPresent が真の場合
      //    i.  elementK を ToString(k) を引数として
      //        o の [[Get]] 内部メソッドを呼んだ結果とします。
      //   ii.  same を searchElement と elementK で
      //        厳密な同一比較アルゴリズムを行った結果とします。
      //  iii.  same が真の場合 k を返します。
      if (k in o && o[k] === searchElement)
        return k;
    }
    return -1;
  };
}
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.indexOf")}}

## 関連情報

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
