---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: ae586f9996f622b40379283f727febe94258b8c0
---

{{JSRef}}

**`Object.hasOwn()`** 静的メソッドは、指定されたオブジェクトが、指定されたプロパティを自身のプロパティとして持っている場合に `true` を返します。そのプロパティが継承されている場合、または存在しない場合、このメソッドは `false` を返します。

> **メモ:** `Object.hasOwn()` 静的メソッドは {{jsxref("Object.hasOwnProperty()")}} インスタンスメソッドに代わるものとして意図されています。

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## 構文

```js
hasOwn(instance, prop);
```

### 引数

- `instance`
  - : テストする JavaScript オブジェクトのインスタンス。
- `prop`
  - : テストするプロパティの名前の {{jsxref("String")}} または [Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

### 返値

指定されたオブジェクトが指定されたプロパティを直接定義している場合、`true` を返します。それ以外の場合は `false` を返します。

## 解説

**`Object.hasOwn()`** メソッドは、指定されたプロパティがオブジェクトの直接のプロパティである場合、そのプロパティ値が `null` または `undefined` であっても、`true` を返します。プロパティが継承されているか、またはまったく宣言されていない場合、このメソッドは `false` を返します。{{jsxref("Operators/in", "in")}} 演算子とは異なり、このメソッドは、オブジェクトのプロトタイプチェーンで指定されたプロパティをチェックしません。

{{jsxref("Object.hasOwnProperty()")}} よりも推奨される理由は、`Object.create(null)` を使って作成したオブジェクトや、継承した `hasOwnProperty()` メソッドをオーバーライドしたオブジェクトに対して動作することです。これらの問題は、外部オブジェクトの `Object.prototype.hasOwnProperty()` を呼び出すことで回避できますが、`Object.hasOwn()` の方がより直感的に理解しやすいでしょう。

## 例

### hasOwn を使ってプロパティの存在を調べる

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

### hasOwnProperty の問題となるケース

このセクションでは、`hasOwn()` が `hasOwnProperty` に影響する問題から免れることを示します。まず、`hasOwnProperty()` が再実装されたオブジェクトで使用することができます。

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); //true - hasOwnProperty() が再実装されていても結果に影響しない
}
```

また、{{jsxref("Object.create()","Object.create(null)")}} を使って作成されたオブジェクトのテストにも使用することができます。これらは `Object.prototype` を継承していないため、`hasOwnProperty()` はアクセスできません。

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); //true - オブジェクトの作成方法に関係なく動作する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.hasOwnProperty()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}} 演算子
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
