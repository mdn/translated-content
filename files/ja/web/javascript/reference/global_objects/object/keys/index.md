---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

**`Object.keys()`** 静的メソッドは、指定されたオブジェクトが持つプロパティの**名前**の配列を、通常のループで取得するのと同じ順序で返します。

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## 構文

```js-nolint
Object.keys(obj)
```

### 引数

- `obj`
  - : 自身の列挙可能なプロパティが返されるオブジェクトです。

### 返値

与えられたオブジェクトのすべての列挙可能なプロパティを表す文字列の配列。

## 解説

`Object.keys()` は、 `object` で直接見つかった列挙可能なプロパティに対応する、文字列を要素とする配列を返します。これは {{jsxref("Statements/for...in", "for...in")}} ループによる反復処理と同じですが、 `for...in` ループではプロトタイプチェーン内のプロパティも同様に反復処理します。 `Object.keys()` が返す配列の順序は、 {{jsxref("Statements/for...in", "for...in")}} ループで指定された順序と同じです。

プロパティ値が必要な場合は、代わりに {{jsxref("Object.values()")}} を使用してください。プロパティのキーと値の両方が必要な場合は、代わりに {{jsxref("Object.entries()")}} を使用してください。

## 例

### Object.keys() の使用

```js
// 単純な配列
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// オブジェクトのような配列
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// キーの順序がランダムなオブジェクトのような配列
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo は列挙可能ではないプロパティ
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

列挙可能ではないものを含むすべてのプロパティを取得したい場合、{{jsxref("Object.getOwnPropertyNames()")}} をご覧ください。

### プリミティブに対する Object.keys() の使用

オブジェクト以外の引数は[オブジェクトへ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#オブジェクト変換)されます。 [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) と [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) はオブジェクトに変換することができず、 {{jsxref("TypeError")}} を前もって発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、他のすべてのプリミティブは空の配列を返します。

```js
// 文字列は列挙可能な独自のプロパティとしてインデックスを持っている
console.log(Object.keys("foo")); // ['0', '1', '2']

// undefined と null以 外のプリミティブは、自分自身でプロパティを持つことはない
console.log(Object.keys(100)); // []
```

> [!NOTE]
> ES5 では、 `Object.keys()` にオブジェクト以外を渡すと {{jsxref("TypeError")}} が発生していました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.keys` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [列挙可能性とプロパティの所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
