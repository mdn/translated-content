---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
tags:
  - Array
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
  - flatMap
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---
{{JSRef}}

**`flatMap()`** メソッドは、最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内にフラット化します。これは、{{jsxref("Array.prototype.map","map()")}} の後に深さ 1 の {{jsxref("Array.prototype.flat","flat()")}} を行うのと同じですが、これら 2 つのメソッドを別々にコールするよりもわずかに効率的です。

## 構文

```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

### パラメーター

- `currentValue`

  - : 配列で現在処理されている要素です。

- `index`{{optional_inline}}
  - : 配列で現在処理されている要素のインデックスです。
- `array`{{optional_inline}}
  - : `map` が呼び出された配列です。

<!---->

- `callback`
  - : 新しい配列の要素を生成する関数。3 つの引数を受け取ります。
- `thisArg`{{optional_inline}}
  - : `callback` を実行するときに `this` として使用する値です。

### 戻り値

各要素がコールバック関数の結果であり、深さが 1 にフラット化された新しい配列です。

## 説明

コールバック関数の詳細な説明は {{jsxref("Array.prototype.map()")}} を参照してください。`flatMap` メソッドは、[`map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) の後に深さ 1 の [`flat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) を呼び出すのと同じです。

### 代替

#### `reduce()` と `concat()`

```js
var arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
```

ただし、これは非効率的であり、大きな配列の場合は避けるべきであることに注意してください。処理ごとにガベージコレクションが必要な新しい一時配列を作成し、要素を単に追加するのではなく、現在のアキュムレータ配列から新しい配列に要素をコピーします。

## 例

### `map()` と `flatMap()`

```js
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

上記は map を使用することでも実現できますが、ここでは `flatMap` の使用方法をよりよく示す例を紹介します。

文章のリストから単語のリストを生成してみましょう。

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

出力リストの長さは入力リストの長さとは異なる場合があることに注意してください。

### `map()` のアイテムの追加と削除

`flatMap` は、`map` 中にアイテムの追加と削除（アイテムの数を変更）を行う方法として利用できます。つまり、常に*一対一*ではなく、_多くのアイテムを多くのアイテムに_（入力されたアイテムを個別に扱うことで）マップできるようになります。この意味では、[filter](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) の逆のような働きをします。単純に、アイテムを保持するには 1 要素の配列を返し、アイテムを追加するには複数要素の配列を返し、アイテムを削除するには 0 要素の配列を返します。

```js
// 負の数をすべて取り除き、奇数を偶数と1に分割します。
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// 期待される出力: [4, 1, 4, 20, 16, 1, 18]
```

## 仕様

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.flatmap', 'Array.prototype.flatMap')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.flatMap")}}

## 関連情報

- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
