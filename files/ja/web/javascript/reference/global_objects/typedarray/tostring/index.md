---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`toString()`** メソッドは、指定された配列とその要素を表す文字列を返します。このメソッドは、{{jsxref("Array.prototype.toString()")}} と同じアルゴリズムです。ここで _TypedArray_ は [型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)の何れかです。

{{EmbedInteractiveExample("pages/js/typedarray-tostring.html","shorter")}}

## 構文

```js-nolint
toString()
```

### 返値

型付き配列の要素を表す文字列です。

## 解説

{{jsxref("TypedArray")}} オブジェクトは {{jsxref("Object")}} の `toString` メソッドをオーバーライドしています。 `TypedArray` オブジェクトでは、`toString` メソッドは配列をつないで、配列のそれぞれの要素がカンマで区切られた 1 つの文字列を返します。たとえば、次のコードは型付き配列を生成した後、 `toString` を使用して配列を文字列に変換しています。

```js
const numbers = new Uint8Array([2, 5, 8, 1, 4]);
numbers.toString(); // "2,5,8,1,4"
```

型付き配列が文字列値として表される必要がある場合や、配列が文字列の結合の中で参照された時、 JavaScript は `toString` メソッドを自動的に呼び出します。

### 互換性

ブラウザーが `TypedArray.prototype.toString()` メソッドに対応していない場合は、 JavaScript は {{jsxref("Object")}} の `toString` メソッドを呼び出します。

```js
const numbers = new Uint8Array([2, 5, 8, 1, 4]);
numbers.toString(); // "[object Uint8Array]"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("TypedArray.prototype.join()")}}
