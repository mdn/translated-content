---
title: 'RegExp: lastIndex'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
tags:
  - JavaScript
  - Property
  - Reference
  - RegExp
  - 正規表現
browser-compat: javascript.builtins.RegExp.lastIndex
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
---
{{JSRef}}

**`lastIndex`** は {{jsXref("RegExp")}} インスタンスの読み書き可能なプロパティで、次の一致を開始する位置を指定します。

なお、 `lastIndex` は {{jsXref("RegExp")}} プロトタイプのプロパティではありませんが、 {{jsXref("RegExp")}} インスタンスからのみ公開されます。

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}{{js_property_attributes(1, 0, 0)}}

## 解説

このプロパティは、正規表現インスタンスがグローバル検索を示すために `g` フラグを使用した場合、または粘着的検索を示すために `y` フラグを使用した場合にのみ設定されます。 {{jsxref("RegExp.prototype.test()", "test()")}} および {{jsxref("RegExp.prototype.exec()", "exec()")}} が指定された入力に対して呼び出されたとき、以下の規則が適用されます。

- `lastIndex` が入力の長さよりも大きい場合、 `exec()` または `test()` は一致するものを見つけられず、 `lastIndex` は 0 に設定されます。
- `lastIndex` が入力の長さ以下であった場合、 `exec()` または `test()` は `lastIndex` から一致するものを探そうとします。

  - `exec()` または `test()` が一致するものを見つけた場合 `lastIndex` は入力の中の一致する文字列の末尾の位置に設定されます。
  - `exec()` または `test()` が一致するものを見つけられなかった場合、 `lastIndex` は 0 に設定されます。

## 例

### lastIndex の使用

例えば、以下の一連の処理を考えてみてください。

```js
var re = /(hi)?/g;
```

空文字列に一致します。

```js
console.log(re.exec('hi'));
console.log(re.lastIndex);
```

`["hi", "hi"]` を返し、 `lastIndex` は 2 になります。

```js
console.log(re.exec('hi'));
console.log(re.lastIndex);
```

返値は `["", undefined]` で、 0 番目の要素が一致文字列となる空の配列です。この場合、 `lastIndex` が 2 (現在も 2) であり、`hi` の長さが 2 であるため、空の文字列となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
