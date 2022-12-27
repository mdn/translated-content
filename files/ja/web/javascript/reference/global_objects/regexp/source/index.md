---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
---

{{JSRef}}

**`source`** プロパティは、正規表現オブジェクトのソーステキストを含む {{jsxref("String")}} を返します。これには、両端の 2 つのスラッシュやフラグは含まれません。

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}{{js_property_attributes(0, 0, 1)}}

## 例

### source の使用

```js
var regex = /fooBar/ig;

console.log(regex.source); // "fooBar", /.../ と "ig" は含まれません。
```

### 空の正規表現とエスケープ

ECMAScript 5 から、`source` プロパティは空の正規表現に対して空文字を返さなくなりました。代わりに、`(?:)` 文字列を返します。加えて、 ("\n" のような) 行区切りはエスケープされます。

```js
new RegExp().source; // "(?:)"

new RegExp('\n').source === '\n';  // ES5 以前で、true
new RegExp('\n').source === '\\n'; // ES5 から、true
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.source', 'RegExp.prototype.source')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.source")}}

## 関連情報

- {{jsxref("RegExp.prototype.flags")}}
