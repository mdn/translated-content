---
title: TypedArray.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`findLastIndex()`** メソッドは、[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を逆順で反復処理し、指定したテスト関数を満たす最初の要素の添字を返します。
テスト関数を満たす値がなかった場合は、-1 を返します。

{{jsxref("TypedArray.findLast()", "findLast()")}} メソッドも参照してください。こちらは見つかった要素の添字ではなく値を返します。

{{EmbedInteractiveExample("pages/js/typedarray-findlastindex.html")}}

## 構文

```js-nolint
// アロー関数
findLastIndex((element) => { /* ... */ } )
findLastIndex((element, index) => { /* ... */ } )
findLastIndex((element, index, array) => { /* ... */ } )

// コールバック関数
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)

// インラインコールバック関数
findLastIndex(function(element) { /* ... */ })
findLastIndex(function(element, index) { /* ... */ })
findLastIndex(function(element, index, array){ /* ... */ })
findLastIndex(function(element, index, array) { /* ... */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 型付き配列の要素に対するテストに使用する関数です。

    この関数は以下の引数で呼び出されます。

    - `element`
      - : 型付き配列内で処理されている現在の要素。
    - `index`
      - : 型付き配列内で処理されている現在の要素の添字（位置）。
    - `array`
      - : `findLastIndex()` が呼び出されている型付き配列。

    コールバック関数は、適切な要素が見つかった際には[真値](/ja/docs/Glossary/Truthy)を返す必要があります。
    この要素の添字が `findLastIndex()` から返されます。

- `thisArg` {{optional_inline}}
  - : オプション。 `callbackFn` を実行するときに {{jsxref("Operators/this", "this")}} として使用する値。

### 返値

テストに合格した要素のうち、配列の最後（最も大きな添字）の要素の添字。
一致する要素が見つからなかった場合に -1 を返します。

## 解説

`findLastIndex()` メソッドは、`callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで、型付き配列の各要素に対して、添字の降順に 1 回ずつ `callbackFn` 関数を実行します。
`findLastIndex()` はその要素の添字を返し、配列のイテレーターを反復処理するのを止めます。
もし `callbackFn` が真値を返さなかった場合、 `findLastIndex()` は {{jsxref("undefined")}} を返します。

`callbackFn` は、要素の値、要素の添字、走査されている型付き配列の 3 つの引数で呼び出されます。

`thisArg` 引数が `findLastIndex()` に指定された場合、それが `callbackFn` を呼び出すたびに `this` として使用されます。
指定されなかった場合は、{{jsxref("undefined")}}が使用されます。

`findLastIndex()` メソッドは呼び出された型付き配列を変更しませんが、`callbackFn` に指定された関数からは変更することができます。

`findLastIndex()` が処理する要素の範囲は、`callbackFn` が最初に呼び出される前に設定されています。
`findLastIndex()` の呼び出しを始めた後に型付き配列に追加された要素は、`callbackFn` が処理する対象にはなりません。
型付き配列に存在する未処理の要素が `callbackFn` によって変更された場合、処理する `callbackFn` に渡されるその値は、`findLastIndex()` がその要素の要素を処理した時点の値になります。

> **警告:** 上記のように変更を同時進行で行うと、理解しにくいコードになることが多いので、（特別な場合を除き）一般的には避けるべきです。

## 例

### 型付き配列から素数の添字を探す

以下の例では、配列の中で素数である最後の要素の添字を探します（素数がない場合は `-1` を返します）。

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLastIndex(isPrime));
// -1 (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLastIndex(isPrime));
// 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.findLastIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
