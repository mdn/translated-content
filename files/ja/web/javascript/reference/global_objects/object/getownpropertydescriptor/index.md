---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

**`Object.getOwnPropertyDescriptor()`** 静的メソッドは、与えられたオブジェクトの特定のプロパティ (すなわち、あるオブジェクトの直接の表現であり、オブジェクトのプロトタイプチェーン内のものではない) の構成を記述したオブジェクトを返します。返されるオブジェクトは変更可能ですが、変更しても元のプロパティの構成には影響を与えません。

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptor.html")}}

## 構文

```js-nolint
Object.getOwnPropertyDescriptor(obj, prop)
```

### 引数

- `obj`
  - : プロパティの確認を行うオブジェクトです。
- `prop`
  - : 記述を受け取るプロパティの名前または {{jsxref("Symbol")}} です。

### 返値

指定したプロパティがオブジェクトにある場合は、プロパティ記述子で、それ以外の場合は {{jsxref("undefined")}} です。

## 解説

このメソッドで、プロパティの正確な定義を確認することができます。 JavaScript の*プロパティ*は、文字列値の名前または {{jsxref("Symbol")}} とプロパティ記述子から成ります。プロパティ記述子およびその属性についての詳細情報は、 {{jsxref("Object.defineProperty()")}} にあります。

*プロパティ記述子*は、以下の属性のいくつかを記録したものです。

- `value`
  - : プロパティに関連づけられた値です (データ記述子のみ)。
- `writable`
  - : `true` である場合、プロパティに関連づけられた値は変更することができます (データ記述子のみ)。
- `get`
  - : プロパティのゲッターとして提供する関数、あるいはゲッターがない場合は `undefined` です (アクセサー記述子のみ)。
- `set`
  - : プロパティのセッターとして提供する関数、あるいはセッターがない場合は `undefined` です (アクセサー記述子のみ)。
- `configurable`
  - : `true` である場合、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
- `enumerable`
  - : `true` である場合、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。

## 例

### Object.getOwnPropertyDescriptor() の使用

```js
let o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get foo],
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for("baz")]: 73 };
d = Object.getOwnPropertyDescriptor(o, Symbol.for("baz"));
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, "qux", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "qux");
console.log(d);
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

### オブジェクト以外の型変換

ECMAScript 5 では、このメソッドへの最初の引数がオブジェクトでない (プリミティブである) 場合は、 {{jsxref("TypeError")}} が発生します。 ECMAScript 2015 では、最初の引数がオブジェクトでなくても、最初に強制的にオブジェクトに変換します。

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor("foo", 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
