---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getMonth()`** メソッドは、地方時に基づき、指定された日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{EmbedInteractiveExample("pages/js/date-getmonth.html","shorter")}}

## 構文

```js-nolint
getMonth()
```

### 返値

地方時に基づき、与えた日付の「月」を表す 0 から 11 までの間の整数値。0 は 1 月、1 は 2 月、11 は 12 月に対応します。

## 例

### getMonth() の使用

以下の 2 行目の文は、{{jsxref("Date")}} オブジェクトである `xmas95` の値に基づき、変数 `month` に 11 という値を代入します。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const month = xmas95.getMonth();

console.log(month); // 11
```

> **メモ:** 必要に応じて、月の完全な名前（例えば `January` ）は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#options_の使用) に `options` 引数を付けることで取得することができます。このメソッドを使用すれば、国際化がより簡単になります。
>
> ```js
> const options = { month: "long" };
> console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
> // December
> console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
> // Dezember
> ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
