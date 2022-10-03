---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
---

{{JSRef}}

**`multiline`** プロパティは、正規表現で "`m`" フラグが使用されているかどうかを示します。`multiline` は正規表現インスタンスごとの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## 解説

`multiline` の値は {{jsxref("Boolean")}} で、"`m`" フラグが使われていたならば、真であり、そうでなければ、偽です。"`m`" フラグは複数行の入力文字列が複数行として扱われるべきであることを示します。例えば、"`m`" フラグが使われているならば、"`^`" と "`$`" は、文字列の全体の始まりと終端だけにマッチする特殊文字から、文字列内の複数行の始まりと終端だけにマッチする特殊文字に変化します。

このプロパティを直接変更することはできません。

## 例

### multiline の使用

```js
var regex = new RegExp('foo', 'm');

console.log(regex.multiline); // true
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.multiline', 'RegExp.prototype.multiline')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.multiline")}}

## 関連情報

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
