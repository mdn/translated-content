---
title: Object.prototype.propertyIsEnumerable()
short-title: propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`propertyIsEnumerable()`** メソッドは、指定されたプロパティが[列挙可能で、かつオブジェクト自身の](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)プロパティであるかどうかを示す論理値を返します。

{{InteractiveExample("JavaScript デモ: Object.prototype.propertyIsEnumerable()", "taller")}}

```js interactive-example
const object = {};
const array = [];
object.foo = 42;
array[0] = 42;

console.log(object.propertyIsEnumerable("foo"));
// 予想される結果: true

console.log(array.propertyIsEnumerable(0));
// 予想される結果: true

console.log(array.propertyIsEnumerable("length"));
// 予想される結果: false
```

## 構文

```js-nolint
propertyIsEnumerable(prop)
```

### 引数

- `prop`
  - : 調べたいプロパティの名前です。文字列または {{jsxref("Symbol")}} が指定できます。

### 返値

論理値で、指定されたプロパティが列挙可能であり、かつオブジェクト自身のプロパティであるかどうかを示します。

## 解説

すべてのオブジェクトは `Object.prototype` から（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてが） `propertyIsEnumerable` メソッドを継承しています。このメソッドは、指定したプロパティ（文字列またはシンボル）がオブジェクトの列挙可能な自分自身のプロパティであるかどうかを判定します。オブジェクトが指定したプロパティを持っていない場合、このメソッドは `false` を返します。

このメソッドは [`Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) と等価です。

## 例

### propertyIsEnumerable() の基本的な使い方

以下の例はオブジェクトと配列での `propertyIsEnumerable()` の使い方を示しています。

```js
const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // true
a.propertyIsEnumerable(0); // true
```

### ユーザー定義オブジェクトと組み込みオブジェクト

以下の例は、ユーザー定義プロパティと組み込みプロパティの列挙可能性を実証しています。

```js
const a = ["is enumerable"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
globalThis.propertyIsEnumerable("Math"); // false
```

### 直接のプロパティと継承されたプロパティ

列挙可能な自分自身で持つプロパティだけが `propertyIsEnumerable()` で `true` を返しますが、継承されたものを含むすべての列挙可能なプロパティは [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループによって処理されます。

```js
const o1 = {
  enumerableInherited: "is enumerable",
};
Object.defineProperty(o1, "nonEnumerableInherited", {
  value: "is non-enumerable",
  enumerable: false,
});
const o2 = {
  // o1 は o2 のプロトタイプ
  __proto__: o1,
  enumerableOwn: "is enumerable",
};
Object.defineProperty(o2, "nonEnumerableOwn", {
  value: "is non-enumerable",
  enumerable: false,
});

o2.propertyIsEnumerable("enumerableInherited"); // false
o2.propertyIsEnumerable("nonEnumerableInherited"); // false
o2.propertyIsEnumerable("enumerableOwn"); // true
o2.propertyIsEnumerable("nonEnumerableOwn"); // false
```

### シンボルプロパティの検査

`propertyIsEnumerable()` は{{jsxref("Symbol", "シンボル")}}プロパティにも対応しています。なお、多くの列挙メソッドは、文字列プロパティのみを扱います。シンボルプロパティの列挙可能性は、{{jsxref("Object.assign()")}} や[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用している場合にのみ有益です。詳細については、[プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)を参照してください。

```js
const sym = Symbol("enumerable");
const sym2 = Symbol("non-enumerable");
const o = {
  [sym]: "is enumerable",
};
Object.defineProperty(o, sym2, {
  value: "is non-enumerable",
  enumerable: false,
});

o.propertyIsEnumerable(sym); // true
o.propertyIsEnumerable(sym2); // false
```

### null プロパティオブジェクトの使用

`null` プロトタイプオブジェクトは `Object.prototype` を継承していないため、 `propertyIsEnumerable()` メソッドを継承しません。代わりにオブジェクトを `this` として `Object.prototype.propertyIsEnumerable` を呼び出す必要があります。

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

o.propertyIsEnumerable("enumerableOwn"); // TypeError: o.propertyIsEnumerable は関数ではありません
Object.prototype.propertyIsEnumerable.call(o, "enumerableOwn"); // true
```

また、代わりに {{jsxref("Object.getOwnPropertyDescriptor()")}} を使用することもできます。これは、存在しないプロパティと実際に列挙できないプロパティを判別するのにも有益です。

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

Object.getOwnPropertyDescriptor(o, "enumerableOwn")?.enumerable; // true
Object.getOwnPropertyDescriptor(o, "nonExistent")?.enumerable; // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [列挙可能性とプロパティの所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
