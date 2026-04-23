---
title: TypedArray.prototype.findLastIndex()
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`findLastIndex()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列を逆順で反復処理し、指定したテスト関数を満たす最初の要素のインデックスを返します。テスト関数を満たす値がなかった場合は、-1 を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.findLastIndex()")}} と同じです。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.findLastIndex()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findLastIndex(isNegative));
// 予想される結果: 3
```

## 構文

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `array`
      - : `findLastIndex()` が実行されている型付き配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

テストに合格した要素のうち、配列の最後（最も大きなインデックス）の要素のインデックス。
一致する要素が見つからなかった場合に -1 を返します。

## 解説

詳細については、 {{jsxref("Array.prototype.findLastIndex()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列から素数のインデックスを探す

以下の例では、配列の中で素数である最後の要素のインデックスを探します。素数がない場合は `-1` を返します。

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLastIndex(isPrime));
// -1 （配列に素数がない）
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLastIndex(isPrime));
// 5
```

> [!NOTE]
> この `isPrime()` の実装はデモンストレーション用です。実際のアプリケーションでは、繰り返し計算を避けることができますので、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)のような高度な記憶化アルゴリズムを使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.findLastIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
