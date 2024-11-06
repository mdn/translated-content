---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`findLast()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列を逆順に反復処理し、指定されたテスト関数を満たす最初の要素の値を返します。テスト関数を満たす要素がない場合は {{jsxref("undefined")}} を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.findLast()")}} と同じです。

{{EmbedInteractiveExample("pages/js/typedarray-findlast.html")}}

## 構文

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `array`
      - : `findLast()` が実行されている型付き配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

指定されたテスト関数を満たす、最後の（最も大きなインデックスを持つ）型付き配列の要素です。一致する値が見つからない場合は {{jsxref("undefined")}} です。

## 解説

詳細については、 {{jsxref("Array.prototype.findLast()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列から素数のインデックスを探す

以下の例では、型付き配列から素数である値のうち、最後の値を返します（素数がない場合は {{jsxref("undefined")}} を返します）。

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
console.log(uint8.findLast(isPrime)); // undefined （配列に素数がない）
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### すべての要素が処理され、コールバックによって変更することがある場合

以下は、すべての要素が処理され、コールバック値に渡された値が処理時の値であることを示す例です。

```js
// インデックス 2, 3, 4 に要素のない配列を宣言。
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
// Set uint8[3] to 44
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

- [`TypedArray.prototype.findLast` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
