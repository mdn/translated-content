---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{JSRef}} {{deprecated_header}}

**`italics()`** メソッドは、文字列がイタリックになるように HTML の {{HTMLElement("i")}} 要素を生成します。

## 構文

```
str.italics()
```

### 返値

HTML の {{HTMLElement("i")}} 要素を含む文字列です。

## 解説

`italics()` メソッドは、文字列を `<i>` 要素の中に、 "`<i>str</i>`" のように埋め込みます。

## 例

### italics() の使用

以下の例では文字列のメソッドを使用して、文字列を整形しています。

```js
var worldString = 'Hello, world';
console.log(worldString.blink());  // <blink>Hello, world</blink>
console.log(worldString.bold());  // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.italics', 'String.prototype.italics')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.italics")}}

## 関連情報

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
