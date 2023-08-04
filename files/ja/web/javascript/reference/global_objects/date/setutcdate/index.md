---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setUTCDate()`** メソッドは、指定された {{jsxref("Date")}} インスタンスの「日」を UTC 時刻に基づいて変更します。

ローカル時間に基づいて指定された {{jsxref("Date")}} インスタンスの「日」を変更するには、 {{jsxref("Date.prototype.setDate()", "setDate()")}} メソッドを使用してください。

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## 構文

```js-nolint
setUTCDate(dayValue)
```

### 引数

- `dayValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

もし `dayValue` がその月の日付値の範囲外だった場合、 `setDate()` は {{jsxref("Date") }} オブジェクトをそれに応じて更新します。

例えば、 `dayValue` に 0 が指定された場合、日付は前月の最終日に設定されます。もし `dayValue` に 40 を使用した場合、{{jsxref("Date")}} オブジェクトに格納されている月が 6 月であれば、日は 10 に変更され、月は 7 月に増加します。

もし `dayValue` に負の数が指定された場合、日付は前月の最終日から逆算して設定されます。 -1 の場合、日付は前月の最終日の 1 日前に設定されます。

## 例

### setUTCDate() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
