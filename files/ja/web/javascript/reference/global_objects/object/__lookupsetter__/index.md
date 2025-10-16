---
title: Object.prototype.__lookupSetter__()
short-title: __lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> この機能は非推奨となり、 {{jsxref("Object.getOwnPropertyDescriptor()")}} API に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__lookupSetter__()`** は {{jsxref("Object")}} インスタンスのメソッドで、指定されたプロパティに結びつけられているセッター関数を返します。

## 構文

```js-nolint
__lookupSetter__(prop)
```

### 引数

- `prop`
  - : セッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定したプロパティのセッターとしてバインドされた関数です。そのようなプロパティが得られない場合、またはプロパティが[データプロパティ](/ja/docs/Web/JavaScript/Guide/Data_structures#データプロパティ)である場合は `undefined` を返します。

## 解説

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__lookupSetter__()` メソッドを継承しています。オブジェクトのプロパティに[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)が定義されている場合、そのプロパティは設定時に関数を呼び出すだけなので、そのプロパティを通してセッター関数を参照することはできません。 `__lookupSetter__()` を使用することで、そのセッター関数を参照することができます。

`__lookupSetter__()` は、指定したプロパティを探すために[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を走査します。プロトタイプチェーンの中にあるオブジェクトが指定した[自分自身のプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)を持っている場合、そのプロパティの[プロパティ記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)の `set` 属性を返します。そのプロパティがデータプロパティの場合は、`undefined` を返します。プロパティがプロトタイプチェーン全体で得られない場合、 `undefined` を返します。

`__lookupSetter__()` は仕様書で "normative optional" と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__lookupSetter__()` を実装する場合、[`__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) の各メソッドも実装する必要があります。

## 例

### \_\_lookupSetter\_\_() の使用

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### 標準の方法でセッタープロパティを参照

プロパティのセッターを参照するには、 {{jsxref("Object.getOwnPropertyDescriptor()")}} API を使用しましょう。 `__lookupSetter__()` と比較して、このメソッドでは[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)プロパティを参照することができます。 `Object.getOwnPropertyDescriptor()` メソッドは、 `Object.prototype` を継承しないため `__lookupSetter__()` メソッドを持たない [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)でも動作します。もし `__lookupSetter__()` のプロトタイプチェーンを走査する動作が重要であれば、 {{jsxref("Object.getPrototypeOf()")}} を使って自分で実装することができます。

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").set;
// [Function: set foo]
```

```js
const obj2 = {
  __proto__: {
    set foo(value) {
      this.bar = value;
    },
  },
};

function findSetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findSetter(obj2, "foo")); // [Function: set foo]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.prototype.__lookupSetter__` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_objects#ゲッターとセッターの定義)
