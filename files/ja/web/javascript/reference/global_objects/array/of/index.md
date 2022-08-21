---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
---
{{JSRef}}

**`Array.of()`** メソッドは、引数の数や型にかかわらず、可変長引数から、新しい `Array` インスタンスを生成します。

**`Array.of()`** と `Array` コンストラクタの違いは整数引数の扱いにあります。**`Array.of(7)`** は単一の要素、`7` を持つ配列を作成しますが、**`Array(7)`** は `length` プロパティが 7 の空の配列を作成します（**注:** これは実際の `undefined` の値を持つスロットではなく、7 つの空のスロットの配列を意味します）。

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // 7 つの空のスロットの配列
Array(1, 2, 3);    // [1, 2, 3]
```

## 構文

```
Array.of(element0[, element1[, ...[, elementN]]])
```

### 引数

- `elementN`
  - : 生成する配列の要素。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

この関数は、ECMAScript 標準の第 6 版の一部です。詳しい情報は、[`Array.of` と `Array.from` 提案](https://gist.github.com/rwaldron/1074126)、[`Array.of` 互換コード](https://gist.github.com/rwaldron/3186576) をご覧ください。

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}

## ポリフィル

以下のコードを他のコードよりも前に記述する事により、ネイティブで実装されていなくても、`Array.of()` が使用可能になります。

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
    // Or
    let vals = [];
    for(let prop in arguments){
        vals.push(arguments[prop]);
    }
    return vals;
  }
}
```

## 例

### Array.of の使用

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## 仕様

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.of', 'Array.of')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.of")}}

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
