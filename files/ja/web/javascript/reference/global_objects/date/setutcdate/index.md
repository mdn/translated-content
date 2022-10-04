---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

**`setUTCDate()`** メソッドは、協定世界時に基づき、指定された日付の「日」を設定します。

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## 構文

```
dateObj.setUTCDate(dayValue)
```

### 引数

- `dayValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCDate()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`dayValue` に 40 を指定し、{{jsxref("Date")}} に格納された「月」が 6 月の場合、「日」は 10 に変更され、「月」が繰り上がって 7 月になります。

## 例

### setUTCDate() の使用

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setUTCDate")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
