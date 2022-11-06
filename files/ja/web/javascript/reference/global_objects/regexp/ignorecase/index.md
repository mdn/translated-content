---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}

**`ignoreCase`** プロパティは、"`i`" フラグが正規表現で使われているかどうかを示します。`ignoreCase` は、正規表現インスタンスごとの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}{{js_property_attributes(0, 0, 1)}}

## 解説

`ignoreCase` の値は {{jsxref("Boolean")}} で、"`i`" フラグが使われていたならば、真であり、そうでなければ、偽です。"`i`" フラグは、文字列でのマッチを適用する際に、大文字と小文字の違いは無視されるべきであることを示します。

このプロパティを直接変更することはできません。

## 例

### ignoreCase の使用

```js
var regex = new RegExp('foo', 'i');

console.log(regex.ignoreCase); // true
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.ignoreCase")}}

## 関連情報

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
