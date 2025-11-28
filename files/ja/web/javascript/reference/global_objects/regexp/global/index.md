---
title: RegExp.prototype.global
short-title: global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`global`** は {{jsxref("RegExp")}} インスタンスのプロパティで、`g` フラグが正規表現で使われているかどうかを返します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.global")}}

```js interactive-example
const regex1 = /foo/g;

console.log(regex1.global);
// 予想される結果: true

const regex2 = /bar/i;

console.log(regex2.global);
// 予想される結果: false
```

## 解説

`RegExp.prototype.global` は、`g` フラグが使用された場合は `true`、そうでない場合は `false` になります。`g` フラグは、正規表現が文字列内のすべての可能なマッチに対してテストされるべきであることを示します。 [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) を呼び出すたびに [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) プロパティが更新され、次の `exec()` の呼び出しが次の文字から始まるようになります。

[`String.prototype.matchAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) や [`String.prototype.replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) のようないくつかのメソッドは、引数が正規表現である場合、それがグローバルであることを検証します。正規表現の [`[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) および [`[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)（[`String.prototype.match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match) と [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) によって呼び出されます）も、正規表現がグローバルである場合に異なる動作をします。

`global` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### global の使用

```js
const globalRegex = /foo/g;

const str = "fooexamplefoo";
console.log(str.replace(globalRegex, "")); // example

const nonGlobalRegex = /foo/;
console.log(str.replace(nonGlobalRegex, "")); // examplefoo
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
