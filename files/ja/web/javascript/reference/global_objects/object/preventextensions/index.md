---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Object.preventExtensions()`** 静的メソッドは、すでにプロパティが追加されたオブジェクトで、新しいプロパティを抑制します (すなわち、オブジェクトのさらなる拡張を抑制します)。また、このオブジェクトのプロトタイプが再代入されることを防ぎます。

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## 構文

```js-nolint
Object.preventExtensions(obj)
```

### 引数

- `obj`
  - : 拡張を不可能にしたいオブジェクトです。

### 返値

拡張不可能にされたオブジェクトです。

## 解説

新しいプロパティを追加できる場合、オブジェクトは拡張可能です。 `Object.preventExtensions()` はオブジェクトを拡張不可能と標示することで、その時点で持っているプロパティ以外のプロパティを持たせることを不可能にします。拡張不可能なオブジェクトのプロパティは通常、依然として*削除*できることに注意してください。拡張不可能なオブジェクトへ新たにプロパティを追加しようとしても、暗黙的に失敗するか、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では {{jsxref("TypeError")}} が発生して失敗します。

[`Object.seal()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) や [`Object.freeze()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) とは異なり、 `Object.preventExtensions()` は JavaScript 固有の動作を呼び出すものであり、他にもいくつかの演算を合成して置き換えることはできません。また、 `Reflect` にも対応する [`Reflect.preventExtensions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions) があります（これは、本質的な処理を運営するためにのみ存在します）。

`Object.preventExtensions()` は、自身のプロパティの追加のみを抑制します。オブジェクトのプロトタイプにプロパティを追加することは可能です。

このメソッドは対象の `[[prototype]]` を不変にし、それ以降のあらゆる `[[prototype]]` への再代入は {{jsxref("TypeError")}} を発生します。この動作は `[[prototype]]` 内部プロパティ固有のものであり、他のプロパティは変更可能なままです。

拡張可能なオブジェクトを拡張不可能にする方法はありますが、逆の方法はありません。

## 例

### Object.preventExtensions の使用

```js
// Object.preventExtensions は拡張不可能にしたオブジェクトを返します
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// 既定でオブジェクトは拡張可能です
const empty = {};
Object.isExtensible(empty); // true

// この性質は変更できます
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Object.defineProperty で拡張不可能なオブジェクトに
// 新しいプロパティを追加する際、エラーが発生します
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // TypeError が発生

// 厳格モードでは、拡張不可能なオブジェクトに
// 新たなプロパティを追加しようとすると TypeError が発生します
function fail() {
  "use strict";
  // TypeError が発生
  nonExtensible.newProperty = "FAIL";
}
fail();
```

拡張不可能なオブジェクトのプロトタイプは不変になります。

```js
const fixed = Object.preventExtensions({});
// TypeError が発生
fixed.__proto__ = { oh: "hai" };
```

### オブジェクト以外の型強制

ES5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxref("TypeError")}} が発生します。 ES2015 以降では、オブジェクトでない引数は、それが拡張不可能な通常のオブジェクトであるかのように扱われ、単にそれを返します。

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
