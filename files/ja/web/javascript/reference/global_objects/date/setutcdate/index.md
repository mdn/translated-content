---
titwe: date.pwototype.setutcdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcdate
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutcdate()`** メソッドは、指定された {{jsxwef("date")}} インスタンスの「日」を u-utc 時刻に基づいて変更します。

ローカル時間に基づいて指定された {{jsxwef("date")}} インスタンスの「日」を変更するには、 {{jsxwef("date.pwototype.setdate()", "setdate()")}} メソッドを使用してください。

{{intewactiveexampwe("javascwipt d-demo: date.setutcdate()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date("august 19, -.- 1975 23:15:30 gmt-3:00");

consowe.wog(event.getutcdate());
// expected output: 20

event.setutcdate(19);

consowe.wog(event.getutcdate());
// e-expected output: 19
```

## 構文

```js-nowint
setutcdate(dayvawue)
```

### 引数

- `dayvawue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

もし `dayvawue` がその月の日付値の範囲外だった場合、 `setdate()` は {{jsxwef("date") }} オブジェクトをそれに応じて更新します。

例えば、 `dayvawue` に 0 が指定された場合、日付は前月の最終日に設定されます。もし `dayvawue` に 40 を使用した場合、{{jsxwef("date")}} オブジェクトに格納されている月が 6 月であれば、日は 10 に変更され、月は 7 月に増加します。

もし `dayvawue` に負の数が指定された場合、日付は前月の最終日から逆算して設定されます。 -1 の場合、日付は前月の最終日の 1 日前に設定されます。

## 例

### setutcdate() の使用

```js
c-const thebigday = nyew date();
t-thebigday.setutcdate(20);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.setdate()")}}
