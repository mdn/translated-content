---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setTime()`** メソッドは、{{jsxref("Date")}} オブジェクトを協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間をミリ秒単位で表す時刻に設定します。

{{EmbedInteractiveExample("pages/js/date-settime.html", "taller")}}

## 構文

```js-nolint
setTime(timeValue)
```

### 引数

- `timeValue`
  - : 協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間をミリ秒単位で表す整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値 (更新された日時は、引数の値になります)。

## 解説

`setTime()` メソッドは、日付と時刻を別の {{jsxref("Date")}} オブジェクトに代入するのに役立ちます。

## 例

### setTime() の使用

```js
const theBigDay = new Date("July 1, 1999");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
