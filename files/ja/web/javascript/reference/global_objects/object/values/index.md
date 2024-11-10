---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

**`Object.values()`** 静的メソッドは、指定されたオブジェクトが持つ列挙可能なプロパティの文字列キーのプロパティ値を配列で返します。

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## 構文

```js-nolint
Object.values(obj)
```

### 引数

- `obj`
  - : オブジェクト。

### 返値

指定されたオブジェクトが持つ列挙可能なプロパティの文字列キーのプロパティ値を配列で返します。

## 解説

`Object.values()` は `object` に直接得られる文字列キーのプロパティを列挙した配列の値を返します。これは {{jsxref("Statements/for...in", "for...in")}} ループで反復処理するのと同じですが、`for...in` ループではプロトタイプチェーンのプロパティも列挙されます。 `Object.values()` が返す配列の順序は、 {{jsxref("Statements/for...in", "for...in")}} ループで指定された順序と同じです。

プロパティキーが必要な場合は、代わりに {{jsxref("Object.keys()")}} を使用します。プロパティのキーと値の両方が必要な場合は、代わりに {{jsxref("Object.entries()")}} を使用します。

## 例

### Object.values の使用

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 配列風オブジェクト
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// ランダムなキー順序を持つ配列風オブジェクト
// 数値のキーを使用すると、値はキーの番号順に返される
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// 列挙可能でないプロパティ getFoo がある
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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### プリミティブに Object.values() を使用

オブジェクト以外の引数は[オブジェクトに変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#オブジェクト変換)されます。 [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) や [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) はオブジェクトに強制できず、 {{jsxref("TypeError")}} が発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、 他のプリミティブはすべて空の配列を返します。

```js
// オブジェクトでない引数はオブジェクトへと型強制される
console.log(Object.values("foo")); // ['f', 'o', 'o']

// undefined と null 以外のプリミティブは、自分自身でプロパティを持つことはない
console.log(Object.values(100)); // []
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.values` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
