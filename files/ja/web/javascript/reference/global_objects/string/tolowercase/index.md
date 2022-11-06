---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef}}

**`toLowerCase()`** メソッドは、呼び出す文字列の値を小文字に変換して返します。

{{EmbedInteractiveExample("pages/js/string-tolowercase.html","shorter")}}

## 構文

```
str.toLowerCase()
```

### 返値

呼び出す文字列の値を小文字に変換した新しい文字列です。

## 解説

`toLowerCase()` メソッドは、小文字に変換された文字列の値を返します。`toLowerCase()` メソッドは、文字列 `str` 自身の値には影響を与えません。

## 例

### `toLowerCase()` メソッドの使用

```js
console.log('ALPHABET'.toLowerCase()); // 'alphabet'
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.toLowerCase")}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
