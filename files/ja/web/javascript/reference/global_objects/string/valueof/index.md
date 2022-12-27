---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、{{jsxref("String")}} オブジェクトのプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## 構文

```
str.valueOf()
```

### 戻り値

与えられた {{jsxref("String")}} オブジェクトのプリミティブ値を表す文字列。

## 詳細

{{jsxref("String")}} オブジェクトの `valueOf()` メソッドは、{{jsxref("String")}} オブジェクトの文字列型としてのプリミティブ値を返します。この値は、{{jsxref("String.prototype.toString()")}} の戻り値と等価です。

このメソッドは通常、JavaScript によって内部的に呼ばれ、コード中で明示的に呼ばれることはありません。

## 例

### `valueOf()` メソッドの使用

```js
var x = new String('Hello world');
console.log(x.valueOf()); // "Hello world" を表示します
```

## 仕様

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.valueof', 'String.prototype.valueOf')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.String.valueOf")}}

## 関連情報

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
