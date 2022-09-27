---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

**`toJSON()`** メソッドは、{{jsxref("Date")}} オブジェクトの文字列表現を返します。

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## 構文

```
dateObj.toJSON()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxref("Date")}} インスタンスは、特定の時点を参照します。`toJSON()` の呼び出しは、{{jsxref("Date")}} オブジェクトの値を表す文字列 ({{jsxref("Date.prototype.toISOString()", "toISOString()")}} を使用) を返します。このメソッドは、一般的に、{{Glossary("JSON")}} シリアライズを目的として {{jsxref("Date")}} オブジェクトをシリアライズするために使用されます。

## 例

### toJSON() を使う

```js
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toJSON")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
