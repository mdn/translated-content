---
title: RegExp.prototype.multiline
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`multiline`** は {{jsxref("RegExp")}} のアクセサープロパティで、正規表現で `m` フラグが使用されているかどうかを返します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = /^football/;
const regex2 = /^football/m;

console.log(regex1.multiline);
// 予想される結果: false

console.log(regex2.multiline);
// 予想される結果: true

console.log(regex1.test("rugby\nfootball"));
// 予想される結果: false

console.log(regex2.test("rugby\nfootball"));
// 予想される結果: true
```

## 解説

`RegExp.prototype.multiline` の値は `m` フラグが使われていたならば `true` となり、そうでなければ `false` になります。`m` フラグは複数行の入力文字列が複数行として扱われるべきであることを示します。例えば、`m` フラグが使われた場合、`^` と `$` は文字列の全体の先頭と末尾だけに一致する特殊文字から、文字列内のそれぞれの行の先頭と末尾に一致する特殊文字に変化します。

`multiline` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### multiline の使用

```js
const regex = /^foo/m;

console.log(regex.multiline); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
