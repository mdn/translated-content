---
title: Object.hasOwn()
short-title: hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.hasOwn()`** は静的メソッドで、指定されたオブジェクトが、指定されたプロパティを自身のプロパティとして持っている場合に `true` を返します。そのプロパティが継承されている場合、または存在しない場合、このメソッドは `false` を返します。

> [!NOTE]
> `Object.hasOwn()` 静的メソッドは {{jsxref("Object.hasOwnProperty()")}} インスタンスメソッドを置き換えるものとして意図されています。

{{InteractiveExample("JavaScript デモ: Object.hasOwn()")}}

```js interactive-example
const object = {
  prop: "exists",
};

console.log(Object.hasOwn(object, "prop"));
// 予想される結果: true

console.log(Object.hasOwn(object, "toString"));
// 予想される結果: false

console.log(Object.hasOwn(object, "undeclaredPropertyValue"));
// 予想される結果: false
```

## 構文

```js-nolint
Object.hasOwn(obj, prop)
```

### 引数

- `obj`
  - : テストする JavaScript オブジェクトのインスタンス。
- `prop`
  - : テストするプロパティの名前の文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

### 返値

指定されたオブジェクトが指定されたプロパティを直接定義している場合、`true` を返します。それ以外の場合は `false` を返します。

## 解説

`Object.hasOwn()` メソッドは、指定されたプロパティがオブジェクトの直接のプロパティである場合、そのプロパティ値が `null` または `undefined` であっても、`true` を返します。プロパティが継承されているか、またはまったく宣言されていない場合、このメソッドは `false` を返します。{{jsxref("Operators/in", "in")}} 演算子とは異なり、このメソッドは、オブジェクトのプロトタイプチェーンで指定されたプロパティをチェックしません。

{{jsxref("Object.prototype.hasOwnProperty()")}} よりも推奨される理由は、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)や、継承した `hasOwnProperty()` メソッドをオーバーライドしたオブジェクトに対して動作することです。これらの問題を回避するには、別のオブジェクトの `Object.prototype.hasOwnProperty()` にアクセスする方法がありますが（`Object.prototype.hasOwnProperty.call(obj, prop)` のように）、`Object.hasOwn()` の方が直感的で簡潔です。

## 例

### Object.hasOwn() を使ってプロパティの存在を調べる

次のコードは、`example` オブジェクトに `prop` という名前のプロパティが含まれているかどうかを判断する方法を示しています。

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' は定義されていない

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' は定義されている

example.prop = null;
Object.hasOwn(example, "prop"); // true - null として定義されている

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - undefined として定義されている
```

### 直接のプロパティと継承されたプロパティ

以下の例では、直接のプロパティとプロトタイプチェーンを通じて継承されたプロパティを区別します。

```js
const example = {};
example.prop = "exists";

// `hasOwn` は直接のプロパティの場合のみ true を返す
Object.hasOwn(example, "prop"); // returns true
Object.hasOwn(example, "toString"); // returns false
Object.hasOwn(example, "hasOwnProperty"); // returns false

// `in` 演算子は直接または継承されたプロパティの場合に true を返す
"prop" in example; // returns true
"toString" in example; // returns true
"hasOwnProperty" in example; // returns true
```

### オブジェクトのプロパティの反復処理

オブジェクトの列挙可能なプロパティを反復処理するには、以下のようにします。

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

もし `for...in` を使う必要がある場合には、`Object.hasOwn()` を使うことで継承されたプロパティをスキップすることができます。

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### 配列のインデックスが存在するかどうかを調べる

{{jsxref("Array")}} の要素は直接のプロパティとして定義されているので、`hasOwn()` メソッドで特定のインデックスが存在するかどうかを調べることができます。

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### hasOwnProperty() の問題となるケース

この節では、`Object.hasOwn()` が `hasOwnProperty()` に影響を与える問題を回避していることを示します。最初の、`hasOwnProperty()` を再実装したオブジェクトでも使用できます。下記の実例では、再実装された `hasOwnProperty()` メソッドはすべてのプロパティに対して false を返しますが、`Object.hasOwn()` の動作は影響を受けません。

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

console.log(foo.hasOwnProperty("bar")); // false

console.log(Object.hasOwn(foo, "bar")); // true
```

また、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)でも使用することができます。これらは `Object.prototype` を継承していないため、`hasOwnProperty()` はアクセスできません。

```js
const foo = Object.create(null);
foo.prop = "exists";

console.log(foo.hasOwnProperty("prop"));
// Uncaught TypeError: foo.hasOwnProperty is not a function

console.log(Object.hasOwn(foo, "prop")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.hasOwn` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.hasOwn` のポリフィル](https://www.npmjs.com/package/object.hasown)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
