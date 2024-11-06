---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setUTCMonth()`** メソッドは、協定世界時に基づき、指定された日時の「月」を設定します。

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## 構文

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dayValue)
```

### 引数

- `monthValue`
  - : 1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dayValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`dayValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setUTCMonth()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

## 例

### setUTCMonth() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
