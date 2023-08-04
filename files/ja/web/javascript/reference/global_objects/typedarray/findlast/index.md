---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`findLast()`** メソッドは、[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を逆順で反復処理し、指定したテスト関数を満たす最初の要素の値を返します。
テスト関数を満たす値がなかった場合は、{{jsxref("undefined")}} を返します。

{{jsxref("TypedArray.findLastIndex()", "findLastIndex()")}} メソッドも参照してください。こちらは見つかった要素の値ではなく添字を返します。

{{EmbedInteractiveExample("pages/js/typedarray-findlast.html")}}

## 構文

```js-nolint
// アロー関数
findLast((element) => { /* ... */ } )
findLast((element, index) => { /* ... */ } )
findLast((element, index, array) => { /* ... */ } )

// コールバック関数
findLast(callbackFn)
findLast(callbackFn, thisArg)

// インラインコールバック関数
findLast(function(element) { /* ... */ })
findLast(function(element, index) { /* ... */ })
findLast(function(element, index, array){ /* ... */ })
findLast(function(element, index, array) { /* ... */ }, thisArg)
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
      - : `findLast()` が呼び出されている型付き配列。

    コールバック関数は、適切な要素が見つかった際には[真値](/ja/docs/Glossary/Truthy)を返す必要があります。
    この要素の値が `findLast()` から返されます。

- `thisArg` {{optional_inline}}
  - : オプション。 `callbackFn` を実行するときに {{jsxref("Operators/this", "this")}} として使用する値。

### 返値

指定されたテスト関数を満たす、最も大きな添字を持つ型付き配列の要素です。一致する値が見つからない場合は {{jsxref("undefined")}} です。

## 解説

`findLast()` メソッドは、`callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで、型付き配列の各要素に対して、添字の降順に 1 回ずつ `callbackFn` 関数を実行します。
`findLast()` はその要素の添字を返し、配列のイテレーターを反復処理するのを止めます。
もし `callbackFn` が真値を返さなかった場合、 `findLast()` は {{jsxref("undefined")}} を返します。

`callbackFn` は、要素の値、要素の添字、走査されている型付き配列の 3 つの引数で呼び出されます。

`thisArg` 引数が `findLast()` に指定された場合、それが `callbackFn` を呼び出すたびに `this` として使用されます。
指定されなかった場合は、{{jsxref("undefined")}}が使用されます。

`findLast()` メソッドは呼び出された型付き配列を変更しませんが、`callbackFn` に指定された関数からは変更することができます。

`findLast()` が処理する要素の範囲は、`callbackFn` が最初に呼び出される前に設定されています。
`findLast()` の呼び出しを始めた後に型付き配列に追加された要素は、`callbackFn` が処理する対象にはなりません。
型付き配列に存在する未処理の要素が `callbackFn` によって変更された場合、処理する `callbackFn` に渡されるその値は、`findLast()` がその要素の要素を処理した時点の値になります。

> **警告:** 上記のように変更を同時進行で行うと、理解しにくいコードになることが多いので、（特別な場合を除き）一般的には避けるべきです。

## 例

### 型付き配列から素数の添字を探す

以下の例では、型付き配列から素数である値のうち、最後の値を探します（素数がない場合は{{jsxref("undefined")}}を返します）。

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
console.log(uint8.findLast(isPrime)); // undefined (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### すべての要素が処理され、コールバックによって変更することがある場合

以下は、すべての要素が処理され、コールバック値に渡された値が処理時の値であることを示す例です。

```js
// 添字 2, 3, 4 に要素のない配列を宣言。
// 欠落した要素はゼロに初期化されます。
const uint8 = new Uint8Array([0, 1, , , , 5, 6]);

// 要素を逆順に反復処理します。
// なお、すべての要素が処理されます。
uint8.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// 削除されたものも含めて、すべての要素が表示されます。
uint8.findLast((value, index) => {
  // 最初の反復処理で要素 3 を変更します。
  if (index === 6) {
    console.log("Set uint8[3] to 44");
    uint8[3] = 44;
  }
  // 要素 3 はまだ処理されますが、新しい値が示されます。
  console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 0
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
// Deleting uint8[5] with value 5
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 44
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.findLast()` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
