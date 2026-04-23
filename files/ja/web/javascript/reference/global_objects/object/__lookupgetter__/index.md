---
title: Object.prototype.__lookupGetter__()
short-title: __lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> この機能は非推奨となり、 {{jsxref("Object.getOwnPropertyDescriptor()")}} API に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__lookupGetter__()`** は {{jsxref("Object")}} インスタンスのメソッドで、指定されたプロパティに結びつけられているゲッター関数を返します。

## 構文

```js-nolint
__lookupGetter__(prop)
```

### 引数

- `prop`
  - : ゲッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定したプロパティのゲッターとしてバインドされた関数です。そのようなプロパティが得られない場合、またはプロパティが[データプロパティ](/ja/docs/Web/JavaScript/Guide/Data_structures#データプロパティ)である場合は `undefined` を返します。

## 解説

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__lookupGetter__()` メソッドを継承しています。オブジェクトのプロパティに[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)が定義されている場合、そのプロパティはその関数の返値を参照しているため、そのプロパティを通してゲッター関数を参照することはできません。 `__lookupGetter__()` を使用することで、そのゲッター関数を参照することができます。

`__lookupGetter__()` は、指定したプロパティを探すために[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を走査します。プロトタイプチェーンの中にあるオブジェクトが指定した[自分自身のプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)を持っている場合、そのプロパティの[プロパティ記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)の `get` 属性を返します。そのプロパティがデータプロパティの場合は、`undefined` を返します。プロパティがプロトタイプチェーン全体で得られない場合、 `undefined` を返します。

`__lookupGetter__()` は仕様書で "normative optional" と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__lookupGetter__()` を実装する場合、[`__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)、[`__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) の各メソッドも実装する必要があります。

## 例

### \_\_lookupGetter\_\_() の使用

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### 標準の方法でゲッタープロパティを参照

プロパティのゲッターを参照するには、 {{jsxref("Object.getOwnPropertyDescriptor()")}} API を使用しましょう。 `__lookupGetter__()` と比較して、このメソッドでは[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)プロパティを参照することができます。 `Object.getOwnPropertyDescriptor()` メソッドは、 `Object.prototype` を継承しないため `__lookupGetter__()` メソッドを持たない [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)でも動作します。もし `__lookupGetter__()` のプロトタイプチェーンを走査する動作が重要であれば、 {{jsxref("Object.getPrototypeOf()")}} を使って自分で実装することができます。

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

```js
const obj2 = {
  __proto__: {
    get foo() {
      return Math.random() > 0.5 ? "foo" : "bar";
    },
  },
};

function findGetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.get;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findGetter(obj2, "foo")); // [Function: get foo]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.prototype.__lookupGetter__` のポリフィルは (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_objects#ゲッターとセッターの定義)
