---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
---
{{JSRef}}

**`fill()`** メソッドは、開始インデックス（デフォルトは `0`）から終了インデックス（デフォルトは `array.length`）までのすべての要素を、静的な値に変更した配列を返します。

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## 構文

```
arr.fill(value[, start[, end]])
```

### 引数

- `value`
  - : 配列に設定する値です。
- `start` {{optional_inline}}
  - : 開始する位置です。既定値は 0 です。
- `end` {{optional_inline}}
  - : 終了する位置です。既定値は `this.length` です。

### 戻り値

変更された配列です。

## 説明

- `start` が負の場合 `array.length + start` として扱われます。
- `end` が負の場合 `array.length + end` として扱われます。
- `fill` メソッドはジェネリック関数であり、`this` が配列オブジェクトである必要はありません。
- `fill` メソッドは可変メソッドで、配列のコピーではなく、変更された配列そのものを返します。
- 最初のパラメータがオブジェクトの場合、配列の各スロットはそのオブジェクトを参照します。

## ポリフィル

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```

[`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) が利用できないとても古い JavaScript エンジンをサポートする必要がある場合、`Array.prototype` のメソッドを polyfill するのは避けたほうがよいでしょう。それらを列挙不可にすることができないからです。

## 例

### fill を使用する

```js
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## 仕様

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.fill")}}

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
