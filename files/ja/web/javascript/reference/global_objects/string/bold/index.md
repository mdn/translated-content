---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef}} {{deprecated_header}}

**`bold()`** メソッドは、文字列を太字で表示させる HTML の {{HTMLElement("b")}} 要素を生成します。

## 構文

```
str.bold()
```

### 返値

HTML の {{HTMLElement("b")}} 要素を含む文字列です。

## 解説

`bold()` メソッドは、文字列を `<b>` 要素の中に、 "`<b>str</b>`" のように埋め込みます。

## 例

### bold() の使用

下記の例は、 `fixed` メソッドを使用して文字列の表示方法を変更します。

```js
var worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Hello, world</blink>
console.log(worldString.bold());    // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.bold', 'String.prototype.bold')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.bold")}}

## 関連情報

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
