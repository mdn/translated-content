---
title: "TypeError: null/undefined has no properties"
slug: Web/JavaScript/Reference/Errors/No_properties
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "null (or undefined) has no properties" は、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) および {{jsxref("undefined")}} のプロパティにアクセスしようとしたときに発生します。これらはプロパティを何も持ちません。

## エラーメッセージ

```plain
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: Cannot destructure 'x' as it is undefined. (V8-based)
TypeError: Cannot destructure property 'x' of 'y' as it is undefined. (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
TypeError: Right side of assignment cannot be destructured (Safari)
```

## エラー型

{{jsxref("TypeError")}}.

## エラーの原因

[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と {{jsxref("undefined")}} に、アクセス可能なプロパティはありません。したがって、これらに対して[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用したり、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を行ったりすることはできません。

## 例

### null と undefined にはプロパティがない

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## 関連情報

- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
