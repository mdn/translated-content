---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`dotAll`** は {{jsxref("RegExp")}} インスタンスのアクセサープロパティで、正規表現で `s` フラグが使用されているかどうかを示します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}

## 解説

`RegExp.prototype.dotAll` の値は `s` フラグが使用されている場合は `true`、それ以外の場合は `false` です。`s` フラグは、ドット特殊文字 (`.`) が追加で行末記号 ("newline") 文字と一致することを示します。これ以外の場合は一致しません。

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

これは事実上、ドットが基本多言語面 (BMP) のすべての文字と一致することを意味します。アストラル文字と一致させるには、`u` (Unicode) フラグを使用する必要があります。両方のフラグを組み合わせて使用すると、ドットは例外なく任意の Unicode 文字に一致します。

`dotAll` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### dotAll の使用

```js
const str1 = "bar\nexample foo example";

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // foo example

const str2 = "bar\nexample foo example";

const regex2 = /bar.example/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// bar
// example foo example
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`dotAll` フラグのポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
