---
title: WebAssembly.Table.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/length
tags:
  - API
  - JavaScript
  - プロパティ
  - Reference
  - WebAssembly
  - length
  - table
browser-compat: javascript.builtins.WebAssembly.Table.length
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/length
---
{{JSRef}}

**`length`** は {{jsxref("WebAssembly.Table")}} オブジェクトのプロトタイププロパティで、このテーブルの長さ、すなわち、テーブルの要素の数を返します。

## 例

### length の使用

次の例では、新しい WebAssembly Table インスタンスを初期サイズ 2、最大サイズ 10 で作成します。

```js
var table = new WebAssembly.Table({ element: "anyfunc", initial: 2, maximum: 10 });
```

次のようにして、テーブルを 1 ずつ拡大することができます。

```js
console.log(table.length);   // "2"
console.log(table.grow(1));  // "2"
console.log(table.length);   // "3"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
