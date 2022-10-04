---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---

{{JSRef}}

**`isPrototypeOf()`** メソッドは、オブジェクトが別のオブジェクトのプロトタイプチェーンに存在するかどうかを判定します。

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

> **メモ:** `isPrototypeOf()` は、{{jsxref("Operators/instanceof", "instanceof")}} 演算子とは異なります。"`object instanceof AFunction`" 式では、`object` のプロトタイプチェーンは `AFunction` 自身ではなく、`AFunction.prototype` に対して判定されます。

## 構文

```
prototypeObj.isPrototypeOf(object)
```

### 引数

- `object`
  - : プロトタイプチェーンの検索対象。

### 返値

呼び出されたオブジェクトがプロトタイプチェーン内に指定されたオブジェクトを持つかどうかを示す {{jsxref("Boolean")}}。

### 発生するエラー

- {{jsxref("TypeError")}}
  - : `prototypeObj` が undefined か null の場合、{{jsxref("TypeError")}} 発生する

## 解説

`isPrototypeOf()` を用いると、オブジェクトが別のオブジェクト内のプロトタイプチェーンに存在するかどうかをチェックする事ができます。

## 例

### isPrototypeOf の使用

この例は、`baz` オブジェクトのプロトタイプチェーンに、`Baz.prototype` と `Bar.prototype`、`Foo.prototype`、`Object.prototype` が存在しているデモです。

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

`isPrototypeOf()` メソッドは、{{jsxref("Operators/instanceof", "instanceof")}} 演算子と同様に、特定のプロトタイプチェーンから継承されたオブジェクトを扱うときにのみ機能するコードを持つ場合、たとえばそのオブジェクトに特定のメソッドやプロパティが存在することを保証する場合に特に便利です。

たとえば、`baz` オブジェクトが `Foo.prototype` に由来しているか検証してみます:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-object.prototype.isprototypeof', 'Object.prototype.isPrototypeOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.isPrototypeOf")}}

## 関連情報

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.prototype.__proto__")}}
