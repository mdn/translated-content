---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef}} {{deprecated_header}}

**`fixed()`** メソッドは、文字列を等幅フォントで表示させる HTML の {{HTMLElement("tt")}} 要素を生成します。

## 構文

```
str.fixed()
```

### 返値

HTML の {{HTMLElement("tt")}} 要素を含む文字列です。

## 解説

`fixed()` メソッドは、文字列を `<tt>` 要素の中に、 "`<tt>str</tt>`" のように埋め込みます。

## 例

### fixed() の使用

下記の例は、 `fixed` メソッドを使用して文字列の表示方法を変更します。

```js
var worldString = '世界のみなさん、こんにちは！';
console.log(worldString.fixed()); // "<tt>世界のみなさん、こんにちは！</tt>"
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.fixed', 'String.prototype.fixed')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.fixed")}}

## 関連情報

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
