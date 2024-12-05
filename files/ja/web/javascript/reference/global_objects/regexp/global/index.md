---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`global`** は {{jsxref("RegExp")}} インスタンスのプロパティで、`g` フラグが正規表現で使われているかどうかを返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}

## 解説

`RegExp.prototype.global` は、`g` フラグが使用された場合は `true`、そうでない場合は `false` になります。`g` フラグは、正規表現が文字列内のすべての可能なマッチに対してテストされるべきであることを示します。 [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) を呼び出すたびに [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) プロパティが更新され、次の `exec()` の呼び出しが次の文字から始まるようになります。

[`String.prototype.matchAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) や [`String.prototype.replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) のようないくつかのメソッドは、引数が正規表現である場合、それがグローバルであることを検証します。正規表現の [`[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) および [`[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)（[`String.prototype.match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match) と [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) によって呼び出されます）も、正規表現がグローバルである場合に異なる動作をします。

`global` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### global の使用

```js
const regex = /foo/g;
console.log(regex.global); // true

const str = "fooexamplefoo";
const str1 = str.replace(regex, "");
console.log(str1); // example

const regex1 = /foo/;
const str2 = str.replace(regex1, "");
console.log(str2); // examplefoo
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
