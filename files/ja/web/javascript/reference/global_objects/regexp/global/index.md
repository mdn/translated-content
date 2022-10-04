---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
---

{{JSRef}}

**`global`** プロパティは "`g`" フラグが正規表現で使われているかどうかを返します。`global` は個々の正規表現インスタンスの読取専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}{{js_property_attributes(0, 0, 1)}}

## 解説

`global` の値は {{jsxref("Boolean")}} です。 `true` は "`g`" フラグを使用していることを表します。それ以外は `false` になります。 "`g`" フラグは、その正規表現が文字列の中で一致する可能性がある場所すべてについてテストを行うことを示します。 `global` ("`g`") と `sticky` ("`y`") の両方が指定された正規表現では、 `global` フラグが無視され、粘着的な比較が行われます。

このプロパティを直接変更することはできません。

## 例

### global の使用

```js
var regex = new RegExp('foo', 'g');

console.log(regex.global);  // true

var str = 'fooexamplefoo';

var str1 = str.replace(regex, '');

console.log(str1);  // Output: example

var regex1 = new RegExp('foo');

var str2 = str.replace(regex1, '');

console.log(str2);  // Output: examplefoo
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.global', 'RegExp.prototype.global')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.global")}}

## 関連情報

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
