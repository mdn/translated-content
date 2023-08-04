---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---

{{JSRef}}

**`hasOwnProperty()`** メソッドは、オブジェクト自身が（継承されていない）指定されたプロパティを持っているかどうかを示す真偽値を返します。

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## 構文

```
obj.hasOwnProperty(prop)
```

### 引数

- _prop_
  - : テストするプロパティの名前の {{jsxref("String")}} または {{Glossary("Symbol")}} 。

### 返値

{{jsxref("Boolean")}} で、オブジェクトが指定されたプロパティを自身のプロパティとして持っているかどうかを示す

## 解説

{{jsxref("Object")}} のすべての子孫は `hasOwnProperty` メソッドを継承しています。このメソッドはあるオブジェクトが指定されたプロパティを、そのオブジェクトの直接のプロパティとして持っているかどうかを特定するのに使うことができます。 {{jsxref("Operators/in", "in")}} 演算子とは異なり、このメソッドはオブジェクトのプロトタイプチェーンをたどってチェックしません。 {{jsxref("Object")}} が {{jsxref("Array")}} の場合、 `hasOwnProperty` メソッドはある添字が存在するかどうかを調べることができます。

## 注

`hasOwnProperty` はプロパティの値が `null` または `undefined` であっても true を返します。

```js
o = new Object();
o.propOne = null;
o.hasOwnProperty("propOne"); // true を返す
o.propTwo = undefined;
o.hasOwnProperty("propTwo"); // true を返す
```

## 例

### hasOwnProperty を使ってプロパティの存在を調べる

オブジェクト `o` が `prop` という名前のプロパティを持っているかどうかを特定する例を以下に示します。

```js
o = new Object();
o.hasOwnProperty("prop"); // false を返す
o.prop = "exists";
o.hasOwnProperty("prop"); // true を返す
```

### 直接のプロパティと継承されたプロパティ

以下の例では、直接のプロパティとプロトタイプチェーンを通じて継承されたプロパティを区別します。

```js
o = new Object();
o.prop = "exists";
o.hasOwnProperty("prop"); // true を返す
o.hasOwnProperty("toString"); // false を返す
o.hasOwnProperty("hasOwnProperty"); // false を返す
```

### オブジェクトのプロパティの反復処理

以下の例では、継承されたプロパティを除いてオブジェクトのプロパティを反復処理する方法を示します。なお、 {{jsxref("Statements/for...in", "for...in")}} ループですでに列挙可能なアイテムのみが反復処理されるので、 `hasOwnProperty` 自体は列挙可能なアイテムに厳密に限定されているため、ループ内に列挙できないプロパティが見られないことに基づいて想定するべきではありません ({{jsxref("Object.getOwnPropertyNames()")}} のように)。

```js
var buz = {
  fog: "stack",
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log("this is fog (" + name + ") for sure. Value: " + buz[name]);
  } else {
    console.log(name); // toString or something else
  }
}
```

### プロパティ名としての hasOwnProperty の使用

JavaScript は `hasOwnProperty` というプロパティ名を保護していません。したがって、オブジェクトがこの名前のプロパティを持っている場合が存在すれば、正しい結果を得るためには*外部の* `hasOwnProperty` を使用する必要があります。

```js
var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 常に false を返す

// 別な Object の hasOwnProperty 使用して、
// this を foo に設定して呼び出す
({}).hasOwnProperty.call(foo, "bar"); // true

// この目的では、 Object プロトタイプの hasOwnProperty プロパティを
// 使用することもできます。
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
```

なお、後者の場合は新しくオブジェクトを生成しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.hasOwnProperty")}}

## 関連情報

- [プロパティの列挙可能性と所有権](/ja/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
