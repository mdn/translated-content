---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef}}

**`startsWith()`** メソッドは文字列が引数で指定された文字列で始まるかを判定して `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## 構文

```
str.startsWith(searchString[, position])
```

### 引数

- `searchString`
  - : 文字列の先頭で検索される文字の集合です。
- `position` {{optional_inline}}
  - : `searchString` を検索し始めるこの文字列の中の位置です。既定値は `0` です。

### 返値

文字列が指定された文字列で始まる場合は **`true`**、それ以外の場合は **`false`** です。

## 解説

文字列が特定の文字列で始まるかどうかを判断できます。(英文字の)大文字・小文字は区別されます。

## 例

### startsWith() の使用

```js
//startswith
let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true
```

## ポリフィル

このメソッドは ECMAScript 2015 で追加されました。すべての JavaScript の実装でまだ利用可能ではないかもしれません。しかしながら、次のコードで`String.prototype.startsWith()`をエミュレートできます。

```js
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos|0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
```

少々重いですがより強力 (ES2015 に完全準拠) な互換実装を [Mathias Bynens が GitHub](https://github.com/mathiasbynens/String.prototype.startsWith) で公開しています。

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.startsWith")}}

## 関連情報

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
