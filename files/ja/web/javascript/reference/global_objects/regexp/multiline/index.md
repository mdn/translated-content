---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`multiline`** は {{jsxref("RegExp")}} のアクセサープロパティで、正規表現で `m` フラグが使用されているかどうかを返します。

{{InteractiveExample("JavaScript Demo: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = new RegExp("^football");
const regex2 = new RegExp("^football", "m");

console.log(regex1.multiline);
// Expected output: false

console.log(regex2.multiline);
// Expected output: true

console.log(regex1.test("rugby\nfootball"));
// Expected output: false

console.log(regex2.test("rugby\nfootball"));
// Expected output: true
```

## 解説

`RegExp.prototype.multiline` の値は `m` フラグが使われていたならば `true` となり、そうでなければ `false` になります。`m` フラグは複数行の入力文字列が複数行として扱われるべきであることを示します。例えば、`m` フラグが使われた場合、`^` と `$` は文字列の全体の先頭と末尾だけに一致する特殊文字から、文字列内のそれぞれの行の先頭と末尾に一致する特殊文字に変化します。

`multiline` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### multiline の使用

```js
const regex = /foo/m;

console.log(regex.multiline); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
