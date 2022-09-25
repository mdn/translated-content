---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

**`getUTCFullYear()`** メソッドは、協定世界時に基づき、指定された日時の「年」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## 構文

```
dateObj.getUTCFullYear()
```

### 返値

協定世界時に基づき、与えられた日付の「年」を表す数値。

## 解説

`getUTCFullYear()` が返す値は、 2000 年問題に対応した表記に従う絶対的な値、例えば 1995 などです。

## 例

### getUTCFullYear() の使用

次の例は、現在の年を表す 4 桁の値を変数 `year` に代入します。

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCFullYear")}}

## 関連情報

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
