---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

**`getMonth()`** メソッドは、地方時に基づき、指定された日付の「月」を表す 0 を基点とした値 (すなわち 0 が年の最初の月を示す) を返します。

{{EmbedInteractiveExample("pages/js/date-getmonth.html","shorter")}}

## 構文

```
dateObj.getMonth()
```

### 返値

地方時に基づき、与えた日付の「月」を表す 0 から 11 までの間の整数値。0 は 1 月、1 は 2 月、11 は 12 月に対応します。

## 例

### getMonth() の使用

以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクト `Xmas95` の値に基づき、変数 `month` に 11 という値を代入します。

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var month = Xmas95.getMonth();

console.log(month); // 11
```

> **メモ:** 必要であれば、月の完全な名前 (例えば `January` ) は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Using_options) に `options` 引数を付けることで取得することができます。このメソッドを使用すれば、国際化がより簡単になります。
>
> ```js
> var options = { month: 'long'};
> console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
> // December
> console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
> // Dezember
> ```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getMonth")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
