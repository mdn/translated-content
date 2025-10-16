---
title: Object.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.isExtensible()`** メソッドは、オブジェクトが拡張可能であるか（新しいプロパティを追加することができるかどうか）を判定します。

{{InteractiveExample("JavaScript デモ: Object.isExtensible()")}}

```js interactive-example
const object = {};

console.log(Object.isExtensible(object));
// 予想される結果: true

Object.preventExtensions(object);

console.log(Object.isExtensible(object));
// 予想される結果: false
```

## 構文

```js-nolint
Object.isExtensible(obj)
```

### 引数

- `obj`
  - : チェックするオブジェクトです。

### 返値

論理値で、与えられたオブジェクトが拡張可能であるかどうかを示します。

## 解説

オブジェクトは既定では拡張可能です。つまり、新しいプロパティの追加が可能であり、 `[[Prototype]]` プロパティに再代入することができます。オブジェクトは {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, {{jsxref("Object.freeze()")}}, {{jsxref("Reflect.preventExtensions()")}} のいずれかを用いる事で拡張不能に設定する事が可能です。

## 例

### Object.isExtensible の使用

```js
// 新規のオブジェクトは拡張可能
const empty = {};
Object.isExtensible(empty); // true

// その設定は変える事が可能
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// seal メソッドで封印されたオブジェクトは拡張不可と定義される
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// freeze メソッドで凍結されたオブジェクトも拡張不可と定義される
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
```

### オブジェクト以外の型強制

ES5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxref("TypeError")}} が発生します。 ES2015 以降では、オブジェクトでない引数は、それが拡張不可能な通常のオブジェクトであるかのように扱われ、単に `false` を返します。

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
