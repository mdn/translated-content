---
title: 'TypeError: can''t access property "x" of "y"'
slug: conflicting/Web/JavaScript/Reference/Errors/Unexpected_type
original_slug: Web/JavaScript/Reference/Errors/Cant_access_property
---

{{jsSidebar("Errors")}}

JavaScript の例外 "can't access property" は、 {{jsxref("undefined")}} または {{jsxref("null")}} の値に対してプロパティのアクセスが行われた場合に発生します。

## エラーメッセージ

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: can't access property {x} of {y} (Firefox)
TypeError: {y} is undefined, can't access property {x} of it (Firefox)
TypeError: {y} is null, can't access property {x} of it (Firefox)

例:
TypeError: x is undefined, can't access property "prop" of it
TypeError: x is null, can't access property "prop" of it
TypeError: can't access property "prop" of undefined
TypeError: can't access property "prop" of null
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

{{jsxref("undefined")}} か {{jsxref("null")}} に対してプロパティアクセスを行いました。

## 例

### 無効な場合

```js example-bad
// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var foo = null;
foo.substring(1); // TypeError: x is null, can't access property "substring" of it
```

### 問題の修正

`undefined` か `null` のヌルポインターアクセスを修正するには、たとえば [typeof](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子を使用することができます。

```js
if (typeof foo !== 'undefined') {
  // Now we know that foo is defined, we are good to go.
}
```

## 関連情報

- {{jsxref("undefined")}}
- {{jsxref("null")}}
