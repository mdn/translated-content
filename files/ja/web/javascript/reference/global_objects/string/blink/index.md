---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}} {{deprecated_header}}

**`blink()`** メソッドは、文字列を点滅させる HTML の {{HTMLElement("blink")}} 要素を生成します。

> **警告:** 文字列の点滅はアクセシビリティの観点から好ましくありません。また、`<blink>` 要素は非標準であり非推奨です！

## 構文

```
str.blink()
```

### 返値

HTML の {{HTMLElement("blink")}} 要素を含む文字列です。

## 解説

`blink()` メソッドは、文字列を `<blink>` 要素の中に、 "`<blink>str</blink>`" のように埋め込みます。

## 例

### blink() の使用

以下の例では文字列のメソッドを使用して、文字列の整形方法を変化させています。

```js
var worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Hello, world</blink>
console.log(worldString.bold());    // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.blink', 'String.prototype.blink')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.blink")}}

## 関連情報

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
