---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 4e32a881872958fdf928d8b4d42189fba2e11459
---

{{JSRef}}

**`every()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、提供された関数で実装されたテストに、型付き配列内のすべての要素が合格するかどうかをテストします。これは論理値を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.every()")}} と同じです。

{{EmbedInteractiveExample("pages/js/typedarray-every.html")}}

## 構文

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素の添字です。
    - `array`
      - : `every()` が実行されている型付き配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

`callbackFn` 関数がいずれかの要素で{{Glossary("falsy", "偽値")}}を返した場合は、すぐに `false` を返します。それ以外は `true` です。

## 解説

詳細については、 {{jsxref("Array.prototype.every()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### すべての型付き配列の要素の大きさをテストする

次の例は、型付き配列内のすべての要素が 10 以上であるかどうかテストします。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.every` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
