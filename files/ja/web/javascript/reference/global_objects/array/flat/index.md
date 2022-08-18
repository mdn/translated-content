---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - flat
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
---
{{JSRef}}

**`flat()`** メソッドは、すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## 構文

```
var newArray = arr.flat([depth]);
```

### 引数

- `depth` {{optional_inline}}
  - : ネストされた配列構造で、どの程度の深さをフラット化するか指定する深さレベルです。既定値は 1 です。

### 返値

サブ配列の要素を結合した新しい配列。

## 代替手段

### reduce と concat

```js
const arr = [1, 2, [3, 4]];

// 単一レベルの配列にする
arr.flat();
// 次のものと同様
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// または、分割代入の構文を使用して
const flattened = arr => [].concat(...arr);
```

### reduce + concat + isArray + 再帰

```js
const arr = [1, 2, [3, 4, [5, 6]]];

// reduce と concat の再帰によって深いレベルを平坦化することができる
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
```

### スタックの使用

```js
// 再帰を使わずにスタックを使用して平坦化
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    // pop value from stack
    const next = stack.pop();
    if(Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]
```

### Generator 関数の使用

```js
function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) && depth > 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
```

## 例

### ネストされた配列の平坦化

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 平坦化と配列の穴

flat メソッドは配列内の空要素を削除します。

```js
const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.flat', 'Array.prototype.flat')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.flat")}}

## 関連情報

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
