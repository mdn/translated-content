---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
tags:
  - 国際化
  - Intl
  - JavaScript
  - ListFormat
  - ローカライズ
  - メソッド
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.ListFormat.formatToParts
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
---
{{JSRef}}

**`Intl.ListFormat.prototype.formatToParts()`** メソッドは、ロケールを考慮した値のリストの書式化で使用できる様々な部分を表すオブジェクトの配列 ({{jsxref("Array")}}) を返します。

## 構文

```js
formatToParts(list)
```

### 引数

- `list`
  - : ロケールに従って書式化する反復可能オブジェクト、例えば配列 ({{jsxref("Array")}}) です。

### 返値

リストから書式された部品を含むコンポーネントの配列 ({{jsxref("Array")}}) です。

## 解説

{{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}} が、（渡されたロケールとスタイルのオプションに応じて）リストの書式化された文字列を返すのに対し、 `formatToParts()` は、書式化されたされた文字列のさまざまなコンポーネントの配列を返します。

結果として得られる配列の各要素には、 `type` と `value` の 2 つのプロパティがあります。 `type` プロパティはリストの値を指す "`element`" か、言語的な構成要素を指す "`literal`" かのどちらかです。 `value` プロパティはトークンの内容を文字列で指定します。

書式化に使用されるロケールとスタイルのオプションは、 {{jsxref("Intl.ListFormat")}} インスタンスを構築する際に与えられたものです。

## 例

### formatToParts の使用

```js
const fruits = ['Apple', 'Orange', 'Pineapple'];
const myListFormat = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": ", and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
