---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
---

{{JSRef}}

**`map()`** メソッドは、与えられた関数を型付き配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。このメソッドは、{{jsxref("Array.prototype.map()")}}と同じアルゴリズムです。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)の一つです。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 構文

```
typedArray.map(mapFn[, thisArg])
```

### 引数

- `mapFn`

  - : 新しい型付き配列の要素を生み出すコールバック関数で、3 つの引数を取ります。

    - `currentValue`
      - : 現在処理中の要素の値です。
    - `index` {{optional_inline}}
      - : 現在処理中の要素の型付き配列内における添字です。
    - `array` {{optional_inline}}
      - : `map()` が実行されている型付き配列です。

- `thisArg` {{optional_inline}}
  - : `mapFn` を実行するときに `this` として使う値です。

### 返値

新しい型付き配列です。

## 解説

`map()` は、与えられたコールバック関数 (`mapFn`) を型付き配列の各要素に対して、順番通りに一度ずつ呼び出し、その結果から新しい配列を生成します。

`mapFn` は型付き配列のインデックスのうち、値が割り当てられているものにのみ呼び出しす。 `undefined` であるインデックス、すなわち削除されたか値が割り当てられたことがないインデックスには呼び出しません。

`mapFn` は、要素の値、要素の添字、走査中の型付き配列オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が `map()` に与えられた場合は、それが `mapFn` の呼び出し時に渡され、 `this` として使用されます。そうでない場合は、 {{jsxref("undefined")}} が `this` の値として使用されます。 `mapFn` から最終的に見える `this` の値は、[関数における通常の `this` を決定するルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決まります。

`map()` は呼び出された型付き配列を変化させません (ただし、 `mapFn` が呼び出されたあ愛は、変更する可能性はあります)。

`map()` によって処理される要素の範囲は、 `mapFn` が最初に呼び出される前に設定されます。 `map()` の呼び出しが開始された後に追加された要素に対しては、 `mapFn` は実行されません。既存の配列要素が変更されたり、削除された場合、 `mapFn` に渡される値は `map()` がそれらを訪れた時点での値になり、削除された要素を訪問することはありません。

## 例

### 型付き配列を平方根の型付き配列にマッピング

次のコードは型付き配列を取り、最初の型付き配列にある数値の平方根からなる新しい型付き配列を生成します。

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] のまま
```

### 引数を含む関数を使用して型付き配列をマッピングする

次のコードは、1 つの引数を必要とする関数を使用するときに `map()` がどのように動作するかを示しています。引数は元の配列を通した `map()` ループとして、配列の各要素に自動的に割り当てられます。

```js
const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.map")}}

## 関連情報

- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("Array.prototype.map()")}}
