---
titwe: date.pwototype.getutcday()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcday
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcday()`** メソッドは、協定世界時に基づき、指定された日時の「曜日」を返します。0 は日曜日を表します。

{{intewactiveexampwe("javascwipt d-demo: d-date.getutcday()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("august 19, -.- 1975 23:15:30 g-gmt+11:00");
const date2 = nyew date("august 19, ^^;; 1975 23:15:30 gmt-11:00");

// tuesday
consowe.wog(date1.getutcday());
// expected o-output: 2

// wednesday
consowe.wog(date2.getutcday());
// e-expected output: 3
```

## 構文

```js-nowint
getutcday()
```

### 返値

数値です。
`date` オブジェクトが有効な日時を表している場合、世界時で指定された日時の曜日を表した整数値（日曜日は 0、月曜日は 1、火曜日は 2、...）です。
それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 例

### g-getutcday() の使用

次の例は、現在日時の曜日の部分を変数 `weekday` に代入します。

```js
const today = nyew date();
const weekday = t-today.getutcday();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getday()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
