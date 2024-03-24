---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

JavaScript の例外 "_x_ is (not) _y_" は、予期しない型があったときに発生します。よくあるのは、予期せず {{jsxref("undefined")}} または {{jsxref("null")}} の値があった場合です。

## エラーメッセージ

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: "x" is (not) "y" (Firefox)

例:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

予期しない型がありました。これは {{jsxref("undefined")}} または {{jsxref("null")}} の値でしばしば発生します。

また、{{jsxref("Object.create()")}} や {{jsxref("Symbol.keyFor()")}} のようなある種のメソッドは、特定の型を要求し、それを提供する必要があります。

## 例

### 無効な場合

```js example-bad
// undefined と null の場合、substring メソッドは動作しません。
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// ある種のメソッドでは、特定の型が求められることがあります。
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### 問題の修正

null ポインターを `undefined` 値に修正するには、次のように [typeof](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子を用いて行うことができます。

```js
if (foo !== undefined) {
  // これで、 foo が定義されていることがわかるので、実行することができます。
}

if (typeof foo !== "undefined") {
  // 同じというのは良い考えですが、この実装を使わないでください。 - 本当の
  // undefined の値と未宣言の変数が混同されて問題が発生する可能性があります。
}
```

## 関連情報

- {{jsxref("undefined")}}
- {{jsxref("null")}}
