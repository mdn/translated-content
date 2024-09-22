---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

**`Object.entries()`** は静的メソッドで、与えられたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティのキーと値の組の配列を返します。

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## 構文

```js-nolint
Object.entries(obj)
```

### 引数

- `obj`
  - : オブジェクト。

### 返値

指定されたオブジェクト自身が持つ、文字列キーで列挙可能なプロパティのキーと値の組の配列。キーと値の組はそれぞれ 2 つの要素を持つ配列で、最初の要素がプロパティキー（常に文字列）、 2 つ目がプロパティ値です。

## 解説

`Object.entries()` は、`object` に直接得られる文字列キーで列挙可能なプロパティのキーと値の組に対応する配列の要素を返します。これは {{jsxref("Statements/for...in", "for...in")}} ループで反復処理するのと同じですが、 `for...in` ループではプロトタイプチェーンのプロパティも列挙されます。 `Object.entries()` が返す配列の順序は、 {{jsxref("Statements/for...in", "for...in")}} ループで指定されたものと同じです。

プロパティのキーだけが必要な場合は、代わりに {{jsxref("Object.keys()")}} を使用します。プロパティの値だけが必要な場合は、代わりに {{jsxref("Object.values()")}} を使用します。

## 例

### Object.entries() の使用

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

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
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### プリミティブに対する Object.entries() の使用

オブジェクト以外の引数は[オブジェクトに変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#オブジェクト変換)されます。 [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) と [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) はオブジェクトに変換することができず、事前に {{jsxref("TypeError")}} が発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、他のすべてのプリミティブは空の配列を返します。

```js
// オブジェクトでない引数はオブジェクトへと型変換される
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// undefined と null 以外の他のプリミティブには独自のプロパティがない
console.log(Object.entries(100)); // []
```

### Object から Map への変換

{{jsxref("Map/Map", "Map()")}} コンストラクターは `entries` による反復処理に対応しています。`Object.entries` を使うと、 {{jsxref("Object")}} から {{jsxref("Map")}} へと簡単に変換できます。

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Object の反復処理

[配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#配列の分割代入)を使って、オブジェクトを簡単に反復処理することができます。

```js
// for...of ループの使用
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// 配列のメソッドの使用
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.entries` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
