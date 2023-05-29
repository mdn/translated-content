---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`map()`** メソッドは、与えられた関数を型付き配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。このメソッドは、{{jsxref("Array.prototype.map()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)の一つです。

{{EmbedInteractiveExample("pages/js/typedarray-map.html", "shorter")}}

## 構文

```js-nolint
// アロー関数
map((currentValue) => { /* ... */ } )
map((currentValue, index) => { /* ... */ } )
map((currentValue, index, array) => { /* ... */ } )

// コールバック関数
map(callbackFn)
map(callbackFn, thisArg)

// インラインコールバック関数
map(function(currentValue) { /* ... */ })
map(function(currentValue, index) { /* ... */ })
map(function(currentValue, index, array){ /* ... */ })
map(function(currentValue, index, array) { /* ... */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 新しい型付き配列の要素を生み出すコールバック関数です。

    この関数は、以下の引数で呼び出されます。

    - `currentValue`
      - : 現在処理中の要素の値です。
    - `index`
      - : 現在処理中の要素の型付き配列内における添字です。
    - `array`
      - : `map()` が実行されている型付き配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使う値です。

### 返値

新しい型付き配列です。

## 解説

`map()` は、与えられたコールバック関数 (`callbackFn`) を型付き配列の各要素に対して、順番通りに一度ずつ呼び出し、その結果から新しい配列を生成します。

`callbackFn` は型付き配列のインデックスのうち、値が割り当てられているものにのみ呼び出しす。 `undefined` であるインデックス、すなわち削除されたか値が割り当てられたことがないインデックスには呼び出しません。

`callbackFn` は、要素の値、要素の添字、走査中の型付き配列オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が `map()` に与えられた場合は、それが `callbackFn` の呼び出し時に渡され、 `this` として使用されます。そうでない場合は、 {{jsxref("undefined")}} が `this` の値として使用されます。 `callbackFn` から最終的に見える `this` の値は、[関数における通常の `this` を決定するルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決まります。

`map()` は呼び出された型付き配列を変化させません（ただし、 `callbackFn` が呼び出されたあ愛は、変更する可能性はあります）。

`map()` によって処理される要素の範囲は、 `callbackFn` が最初に呼び出される前に設定されます。 `map()` の呼び出しが開始された後に追加された要素に対しては、 `callbackFn` は実行されません。既存の配列要素が変更されたり、削除された場合、 `callbackFn` に渡される値は `map()` がそれらを訪れた時点での値になり、削除された要素を訪問することはありません。

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
const doubles = numbers.map((num) => num * 2);
// doubles は Uint8Array [2, 8, 18] となる
// numbers は Uint8Array [1, 4, 9] のまま
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("Array.prototype.map()")}}
