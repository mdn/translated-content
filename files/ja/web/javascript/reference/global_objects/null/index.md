---
title: 'null'
slug: Web/JavaScript/Reference/Global_Objects/null
tags:
  - JavaScript
  - 言語機能
  - リテラル
  - プリミティブ
browser-compat: javascript.builtins.null
translation_of: Web/JavaScript/Reference/Global_Objects/null
---
{{jsSidebar("Objects")}}

`null` という値は、意図的にオブジェクトの値が存在しないことを表します。これは JavaScript の[プリミティブ値](/ja/docs/Glossary/Primitive)の 1 つであり、論理演算では[偽値](/ja/docs/Glossary/Falsy)として扱われます。

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## 構文

```js
null
```

## 解説

`null` 値は `null` というリテラルです。 `null` は {{jsxref("Global_Objects/undefined","undefined")}} のようなグローバルオブジェクトのプロパティではありません。代わりに、 `null` は識別できないことを表し、変数がオブジェクトを指していないことを示します。 API においては、通常はオブジェクトが返されるところで、関連したオブジェクトがない場合に `null` がよく渡されます。

```js
// foo が存在せず、定義も初期化もされていない場合:
foo; //ReferenceError: foo is not defined
```

```js
// foo が存在しているが、型も値も持たない場合:
var foo = null;
foo; //null
```

## 例

### `null` と `undefined` の違い

`null` や `undefined` をチェックする際は、[等価 (==) と 厳密等価 (===) 演算子の違い](/ja/docs/Web/JavaScript/Reference/Operators) に注意してください（前者では型変換が行われます）。

```js
typeof null          // "object" (歴史的な理由で "null" ではありません)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}} 演算子
