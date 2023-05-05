---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`findIndex()`** メソッドは、型付き配列内の要素が与えられたテスト関数を満たす場合、型付き配列内の**添字**を返します。さもなければ、 -1 が返されます。

{{jsxref("TypedArray.find", "find()")}} メソッドも参照してください。これは型付き配列内の見つかった要素の添字の代わりに**値**を返します。

{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}

## 構文

```js-nolint
// アロー関数
findIndex((element) => { /* ... */ } )
findIndex((element, index) => { /* ... */ } )
findIndex((element, index, array) => { /* ... */ } )

// コールバック関数
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// インラインコールバック関数
findIndex(function(element) { /* ... */ })
findIndex(function(element, index) { /* ... */ })
findIndex(function(element, index, array){ /* ... */ })
findIndex(function(element, index, array) { /* ... */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 型付き配列の各要素で実行する関数。3 つの引数を取ります。

    - `element`
      - : 型付き配列内で現在処理されている要素。
    - `index`
      - : 型付き配列内で現在処理されている要素の位置。
    - `array`
      - : `findIndex()` を呼び出した元の配列。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用するオブジェクト。

### 返値

テストを満たした配列の要素の位置を返します。それ以外の場合は、 `-1` を返します。

## 解説

`findIndex()` メソッドは、 `callbackFn` 関数が true 値を返す要素を見つけるまで、型付き配列内に存在している各要素に対して一度ずつ `callbackFn` 関数を実行します。そのような要素が見つかったら、 `findIndex()` はすぐに要素の添字を返します。さもなければ、 `findIndex()` メソッドは -1 を返します。 `callbackFn` は型付き配列の値を割り当てた位置に対してのみ呼び出されます。つまり、削除されたり、値が割り当てられていない位置に対しては呼び出されません。

`callbackFn` は、要素の値、要素の添字、走査中の型付き配列の 3 つの引数とともに呼び出されます。

`thisArg` 引数が `findIndex()` に与えられた場合、 `callbackFn` の各呼び出しで `this` として使用されます。`thisArg` 引数が与えられなかった場合は、 {{jsxref("undefined")}} が使用されます。

`findIndex()` メソッドは呼び出される型付き配列を変更しません。

`findIndex()` によって処理される要素の範囲は、最初に `callbackFn` が呼び出される前に設定されます。 `findIndex()` の呼び出しが始まったあとで型付き配列に追加された要素は、 `callbackFn` メソッドによって処理されません。存在していて、処理されていない型付き配列の要素が `callbackFn` によって変更された場合、処理している `callbackFn` 関数に渡される値は、 `findIndex()` が要素の位置を処理する直前の値です。削除された要素は処理されません。

## 例

### 型付き配列内の素数の位置を検索する

次の例では、型付き配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は `-1` を返します。

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

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.findIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
