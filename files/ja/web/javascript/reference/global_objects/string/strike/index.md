---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef}} {{deprecated_header}}

**`strike()`** メソッドは、文字列が取り消されたテキストとして表示されるように HTML の {{HTMLElement("strike")}} 要素を生成します。

## 構文

```
str.strike()
```

### 返値

HTML の {{HTMLElement("strike")}} 要素を含む文字列です。

## 解説

`strike()` メソッドは、文字列を `<strike>` 要素の中に、 "`<strike>str</strike>`" のように埋め込みます。

## 例

### strike() の使用

以下の例では文字列のメソッドを使用して、文字列の形式を変更しています。

```js
var worldString = 'Hello, world';

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.strike', 'String.prototype.strike')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.strike")}}

## 関連情報

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
