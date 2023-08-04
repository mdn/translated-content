---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

**`propertyIsEnumerable()`** メソッドは、指定されたプロパティが列挙可能で、かつオブジェクト自身のプロパティであるかどうかを示す論理値を返します。

{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html", "taller")}}

## 構文

```js
propertyIsEnumerable(prop);
```

### 引数

- `prop`
  - : 調べたいプロパティの名前です。

### 返値

`true` または `false` の値で、指定されたプロパティが列挙可能であり、かつオブジェクト自身のプロパティであるかどうかを示します。

## 解説

すべてのオブジェクトは `propertyIsEnumerable` メソッドを持っています。このメソッドはあるオブジェクトのプロパティが、プロトタイプチェーンを通じて継承されたプロパティを除いて {{jsxref("Statements/for...in", "for...in")}} ループで列挙可能かどうかを特定することができます。もしオブジェクトが指定されたプロパティを持っていない場合、このメソッドは `false` を返します。

> **メモ:** 列挙可能なプロパティは {{jsxref("Statements/for...in", "for...in")}} ループで反復処理されますが、 {{jsxref("Global_Objects/Symbol", "Symbol")}} は含まれないことに留意してください。

## 例

### `propertyIsEnumerable` の基本的な使い方

以下の例はオブジェクトと配列での `propertyIsEnumerable` の使い方を示しています。

```js
var o = {};
var a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // true を返す
a.propertyIsEnumerable(0); // true を返す
```

### ユーザー定義オブジェクトと組み込みオブジェクト

以下の例は、ユーザー定義プロパティと組み込みプロパティの列挙可能性を実証しています。

```js
var a = ["is enumerable"];

a.propertyIsEnumerable(0); // true を返す
a.propertyIsEnumerable("length"); // false を返す

Math.propertyIsEnumerable("random"); // false を返す
this.propertyIsEnumerable("Math"); // false を返す
```

<h3 id="Direct_versus_inherited_properties" name="Direct_versus_inherited_properties">直接のプロパティと継承されたプロパティ</h3>

```js
var a = [];
a.propertyIsEnumerable("constructor"); // false を返す

function firstConstructor() {
  this.property = "is not enumerable";
}

firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
  this.method = function () {
    return "is enumerable";
  };
}

secondConstructor.prototype = new firstConstructor();
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = "is enumerable";

o.propertyIsEnumerable("arbitraryProperty"); // true を返す
o.propertyIsEnumerable("method"); // true を返す
o.propertyIsEnumerable("property"); // false を返す

o.property = "is enumerable";

o.propertyIsEnumerable("property"); // true を返す

// これらはすべて false を返します。これは、 (最後の 2 つは for-in で
// 反復処理可能であるにもかかわらず) propertyIsEnumerable が考慮しない
// プロトタイプであるためです。
o.propertyIsEnumerable("prototype"); // false を返す (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // false を返す
o.propertyIsEnumerable("firstMethod"); // false を返す
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [列挙可能性とプロパティの所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
