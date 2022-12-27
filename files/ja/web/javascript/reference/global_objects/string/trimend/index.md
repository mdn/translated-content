---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef}}

**`trimEnd()`** メソッドは、文字列の末尾のホワイトスペースを削除します。 `trimRight()` はこのメソッドのエイリアスです。

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## 構文

```
str.trimEnd();
str.trimRight();
```

### 返値

呼び出した文字列から末尾 (右端) からホワイトスペースを削除した新しい文字列です。

## 解説

`trimEnd()` と `trimRight()` メソッドは、右端のホワイトスペースを取り除いた文字列を返します。 `trimEnd()` または `trimRight()` は元の文字列自身の値に影響を与えません。

### エイリアス

{{jsxref("String.prototype.padEnd")}} のような関数との一貫性を持たせるため、標準メソッドの名前は `trimEnd` となっています。しかし、ウェブの互換性の観点から、 `trimRight` が `trimEnd` のエイリアスとして残されます。エンジンによっては、以下のように解釈されます。

```js
String.prototype.trimRight.name === "trimEnd";
```

## 例

### trimEnd() の使用

以下の例では、小文字の文字列 `' foo'` を表示します。

```js
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.trimend', 'String.prototype.trimEnd')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.trimEnd")}}

## 関連情報

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
