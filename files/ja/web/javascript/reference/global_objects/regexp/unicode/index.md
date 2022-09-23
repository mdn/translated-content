---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
---

{{JSRef}}

**`unicode`** プロパティは、 "`u`" フラグが正規表現で使われているかどうかを示します。`unicode` は正規表現インスタンスごとの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## 解説

`unicode` の値は {{jsxref("Boolean")}} です。"`u`" が使われていたら、`true` です。さもなければ、`false` です。"`u`" フラグは様々な Unicode 関連の機能を有効にします。"u" フラグで、どんな Unicode コードポイントエスケープでもそのようなものとして解釈されます。

このプロパティを直接変更することはできません。読み取り専用です。

## 例

### unicode プロパティの使用

```js
var regex = new RegExp('\u{61}', 'u');

console.log(regex.unicode); // true
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.unicode', 'RegExp.prototype.unicode')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.unicode")}}

## 関連情報

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
