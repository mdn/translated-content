---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

**`endsWith()`** メソッドは文字列が引数で指定された文字列で終わるかを判定して `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## 構文

```
str.endsWith(searchString[, length])
```

### 引数

- `searchString`
  - : `str` の末尾で検索される文字の集合です。
- `length` {{optional_inline}}
  - : 指定された場合、 `str` の長さとして使用されます。既定値は `str.length` です。

### 返値

文字列が指定された文字列で終わる場合は **`true`**、それ以外の場合は **`false`** です。

## 解説

文字列が特定の文字列で終わるかどうかを判断できます。このメソッドでは (英文字の) 大文字・小文字は区別されます。

## 例

### endsWith() の使用

```js
let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true
```

## ポリフィル

このメソッドは ECMAScript 6 で追加されました。すべての　 JavaScript 　の実装でまだ利用可能ではないかもしれません。しかしながら、次のコードで `String.prototype.endsWith()` をエミュレートできます。

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.endsWith")}}

## 関連情報

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
