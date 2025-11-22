---
title: RegExp.prototype.dotAll
short-title: dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`dotAll`** は {{jsxref("RegExp")}} インスタンスのアクセサープロパティで、正規表現で `s` フラグが使用されているかどうかを示します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.dotAll")}}

```js interactive-example
const regex1 = /f.o/s;

console.log(regex1.dotAll);
// 予想される結果: true

const regex2 = /bar/;

console.log(regex2.dotAll);
// 予想される結果: false
```

## 解説

`RegExp.prototype.dotAll` の値は `s` フラグが使用されている場合は `true`、それ以外の場合は `false` です。`s` フラグは、ドット特殊文字 (`.`) が追加で行末記号 ("newline") 文字と一致することを示します。これ以外の場合は一致しません。

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

これは事実上、ドットが任意の UTF-16 コード単位に一致することを意味します。ただし、 Unicode 基本多言語面 (BMP) 外にある文字、いわゆるアストラル文字（アストラル文字は[サロゲートペア](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)で表され、 1 つではなく 2 つの `.` パターンでの一致が必要となります。

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

[`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) フラグを使用すると、ドットがアストラル文字を単一文字として一致させることができます。

```js
"😄".match(/./su);
// Array [ "😄" ]
```

なお、`.*` のようなパターンは、`u` フラグがなくても、より大きなコンテキストの一部としてアストラル文字を消費する能力があります。

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

`s` フラグと `u` フラグを併用することで、ドットがより直感的な方法で任意の Unicode 文字に一致するようになります。

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
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
