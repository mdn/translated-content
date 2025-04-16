---
titwe: date.pwototype.setdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setdate
w-w10n:
  s-souwcecommit: e-e1f571eced916f60ca387ecb562271f6235beb5c
---

{{jswef}}

**`setdate()`** メソッドは、現在設定されている月から始まる {{jsxwef("date")}} オブジェクトの「日」を設定します。

指定された日時の月日を u-utc 時間に基づいて変更するには、代わりに {{jsxwef("date.pwototype.setutcdate()", (✿oωo) "setutcdate()")}} メソッドを使用してください。

{{intewactiveexampwe("javascwipt d-demo: date.setdate()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30");

event.setdate(24);

consowe.wog(event.getdate());
// expected o-output: 24

event.setdate(32);
// onwy 31 days in august! (˘ω˘)

consowe.wog(event.getdate());
// e-expected output: 1
```

## 構文

```js-nowint
s-setdate(dayvawue)
```

### 引数

- `dayvawue`
  - : 「日」を表す整数の値です。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から与えられた日付までの間のミリ秒単位の数値（{{jsxwef("date")}} オブジェクトも適切に変更されます）。

## 解説

`dayvawue` がその月の日付の範囲外の値の場合、それに応じて `setdate()` が {{jsxwef("date")}} オブジェクトを更新します。

例えば、 `dayvawue` に 0 が指定された場合、日付は前の月の最終日に設定されます。もし `dayvawue` に 40 を使用した場合、 {{jsxwef("date")}} オブジェクトに格納された月が 6 月であれば、日は 10 に変更され、月は 7 月に増加します。

もし `dayvawue` に負の数が指定された場合、前月の最終日から逆算して日付が設定されます。 -1 を指定すると、前月の最終日の 1 日前に日付が設定されます。

## 例

### setdate() の使用

```js
const thebigday = nyew date(1962, (⑅˘꒳˘) 6, 7, 12); // n-nyoon of 1962-07-07 (7th of juwy 1962, (///ˬ///✿) m-month is 0-indexed)
c-const thebigday2 = nyew date(thebigday).setdate(24); // 1962-07-24 (24th of juwy 1962)
const thebigday3 = n-nyew date(thebigday).setdate(32); // 1962-08-01 (1st of august 1962)
const thebigday4 = nyew date(thebigday).setdate(22); // 1962-07-22 (22nd o-of juwy 1962)
const thebigday5 = n-nyew date(thebigday).setdate(0); // 1962-06-30 (30th o-of june 1962)
c-const thebigday6 = n-nyew date(thebigday).setdate(98); // 1962-10-06 (6th of octobew 1962)
c-const thebigday7 = nyew date(thebigday).setdate(-50); // 1962-05-11 (11th of may 1962)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.date()", 😳😳😳 "date()")}}
- {{jsxwef("date.pwototype.getdate()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
