---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

{{jsSidebar("Errors")}}

JavaScript の例外 "null (or undefined) has no properties" は、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) および {{jsxref("undefined")}} のプロパティにアクセスしようとしたときに発生します。これらはプロパティを何も持ちません。

## エラーメッセージ

```js
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
```

## エラータイプ

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と {{jsxref("undefined")}} に、アクセス可能なプロパティはありません。

## 例

### null と undefined にはプロパティがない

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## 関連項目

- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
