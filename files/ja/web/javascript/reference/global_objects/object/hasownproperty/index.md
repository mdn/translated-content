---
title: Object.prototype.hasOwnProperty()
short-title: hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`hasOwnProperty()`** は {{jsxref("Object")}} インスタンスのメソッドで、オブジェクト自身が（継承されていない）指定されたプロパティを持っているかどうかを示す論理値を返します。

> [!NOTE]
> {{jsxref("Object.hasOwn()")}} は `hasOwnProperty()` よりもブラウザーの対応状況の面で推奨されます。

{{InteractiveExample("JavaScript デモ: Object.prototype.hasOwnProperty()")}}

```js interactive-example
const object = {};
object.foo = 42;

console.log(object.hasOwnProperty("foo"));
// 予想される結果: true

console.log(object.hasOwnProperty("toString"));
// 予想される結果: false

console.log(object.hasOwnProperty("hasOwnProperty"));
// 予想される結果: false
```

## 構文

```js-nolint
hasOwnProperty(prop)
```

### 引数

- `prop`
  - : テストするプロパティの名前の文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

### 返値

オブジェクトが指定したプロパティを自分自身で保有している場合は `true` を返し、そうでない場合は `false` を返します。

## 解説

**`hasOwnProperty()`** メソッドは、指定したプロパティがオブジェクトの直接のプロパティである場合 (たとえその値が `null` または `undefined` であっても) 、 `true` を返します。プロパティが継承されているか、まったく宣言されていない場合は `false` を返します。 {{jsxref("Operators/in", "in")}} 演算子とは異なり、このメソッドはオブジェクトのプロトタイプチェーンに指定したプロパティがあるかどうかを調べません。

なぜなら、ほとんどのオブジェクトは {{jsxref("Object")}} の子孫であり、そのメソッドを継承しているからです。例えば配列 ({{jsxref("Array")}}) はオブジェクト {{jsxref("Object")}} なので、インデックスが存在するかどうかを調べるには `hasOwnProperty()` メソッドを使用することができます。

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

このメソッドは、再実装されたオブジェクトや、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)（`Object.prototype` を継承していない）では利用できません。これらの場合の例は下記の通りです。

## 例

### hasOwnProperty を使ってプロパティの存在を調べる

オブジェクト `o` が `prop` という名前のプロパティを持っているかどうかを特定する例を以下に示します。

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' が定義されている

example.prop = null;
example.hasOwnProperty("prop"); // true - null 値を持つ独自プロパティ

example.prop = undefined;
example.hasOwnProperty("prop"); // true - undefined 値を持つ独自プロパティ
```

### 直接のプロパティと継承されたプロパティ

以下の例では、直接のプロパティとプロトタイプチェーンを通じて継承されたプロパティを区別します。

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` は直接のプロパティについてのみ true を返す
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// 演算子 `in` は、直接または継承されたプロパティに対して true を返す
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### オブジェクトのプロパティの反復処理

以下の例では、継承されたプロパティを除いてオブジェクトのプロパティを反復処理する方法を示します。

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name); // toString or something else
  }
}
```

なお、 {{jsxref("Statements/for...in", "for...in")}} ループですでに列挙可能なアイテムのみが反復処理されるので、 `hasOwnProperty` 自体は列挙可能なアイテムに厳密に限定されているため、ループ内に列挙できないプロパティが見られないことに基づいて想定するべきではありません ({{jsxref("Object.getOwnPropertyNames()")}} のように)。

### プロパティ名としての hasOwnProperty の使用

JavaScript は `hasOwnProperty` というプロパティ名を保護していません。この名前を持ったプロパティを持つオブジェクトでは、正しくない結果が返る可能性があります。

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 再実装では常に false を返す
```

この問題を克服するために推奨される方法は、代わりに {{jsxref("Object.hasOwn()")}} を使用することです（対応しているブラウザーで）。他にも、外部の `hasOwnProperty` を使用する方法があります。

```js
const foo = { bar: "Here be dragons" };

// Use Object.hasOwn() method - recommended
Object.hasOwn(foo, "bar"); // true

// Use the hasOwnProperty property from the Object prototype
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// 別な Object の hasOwnProperty 使用して、
// this を foo に設定して呼び出す
({}).hasOwnProperty.call(foo, "bar"); // true
```

なお、後者の場合は新しくオブジェクトを生成しません。

### Object.create(null) で作成されたオブジェクト

[`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)は `Object.prototype` を継承していないので、 `hasOwnProperty()` はアクセス不可になります。

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty は関数ではない
```

この場合の解決策は前の節と同じです。構成については {{jsxref("Object.hasOwn()")}} を使用し、そうでなければ外部オブジェクトの `hasOwnProperty()` を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.hasOwn()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
