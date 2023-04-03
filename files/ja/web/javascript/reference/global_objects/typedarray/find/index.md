---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`find()`** メソッドは、型付き配列のある要素の値が与えられたテスト関数を満たした場合、その値を返します。そうでなければ {{jsxref("undefined")}} を返します。ここで _TypedArray_ は[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

{{jsxref("TypedArray.findIndex", "findIndex()")}} メソッドも参照してください。こちらはそのメソッドは値のかわりに型付き配列で見つかった要素の**添字**を返します。

{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}

## 構文

```js-nolint
// アロー関数
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

// コールバック関数
find(callbackFn)
find(callbackFn, thisArg)

// インラインコールバック関数
find(function(element) { /* ... */ })
find(function(element, index) { /* ... */ })
find(function(element, index, array){ /* ... */ })
find(function(element, index, array) { /* ... */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 型付き配列の要素に対するテストに使用する関数です。

    この関数は以下の引数で呼び出されます。

    - `element`
      - : 型付き配列内で現在処理されている要素。
    - `index`
      - : 型付き配列内で現在処理されている要素の位置。
    - `array`
      - : `find()` が呼び出された配列。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用するオブジェクト。

### 返値

テストを満たした配列の要素の位置を返します。それ以外の場合は、 {{jsxref("undefined")}} を返します。

## 解説

`find()` メソッドは `callbackFn` 関数が true 値を返す要素を見つけるまで、型付き配列内に存在している各要素に対して一度ずつ `callbackFn` 関数を実行します。そのような要素が見つかったら、 `find()` はすぐに要素の値を返します。さもなければ、 `find()` は {{jsxref("undefined")}} を返します。 `callbackFn` は型付き配列の値を割り当てた位置に対してのみ呼び出されます。つまり、削除されたり、値が割り当てられて位置に対しては呼び出されません。

`callbackFn` は、要素の値、要素の添字、走査中の型付き配列の 3 つの引数とともに呼び出されます。

`thisArg` 引数が `find()` に与えられた場合、 `callbackFn` の各呼び出しで `this` として使用されます。与えられなかった場合は、 {{jsxref("undefined")}}が使用されます。

`find()` は呼び出されている型付き配列を変更しません。

`find()` によって処理される要素の範囲は、最初に `callbackFn` が呼び出される前に設定されます。 `find()` の呼び出しが始まったあとで型付き配列に追加された要素は、 `callbackFn` メソッドによって処理されません。存在していて、処理されていない型付き配列の要素が `callbackFn` によって変更された場合、処理している `callbackFn` 関数に渡される値は、 `find()` が要素の位置を処理する直前の値です。削除された要素は処理されません。

## 例

### 型付き配列内の素数を探す

次の例では、型付き配列内で素数である要素を探します (または、素数がない場合は {{jsxref("undefined")}} を返します)。

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.find` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.every()")}}
