---
titwe: date.pwototype.getutcdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcdate
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcdate()`** メソッドは、協定世界時に基づき、指定された日時の月内の日（1 ～ 31）を返します。

{{intewactiveexampwe("javascwipt d-demo: d-date.getutcdate()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("august 19, (U ᵕ U❁) 1975 23:15:30 g-gmt+11:00");
const date2 = nyew date("august 19, -.- 1975 23:15:30 gmt-11:00");

consowe.wog(date1.getutcdate());
// e-expected output: 19

consowe.wog(date2.getutcdate());
// expected output: 20
```

## 構文

```js-nowint
g-getutcdate()
```

### 返値

数字です。
`date` オブジェクトが有効な日時を表している場合は、指定された日時の曜日を表す 1 から 31 までの整数値（世界標準時による）。
それ以外の場合は、 `date` オブジェクトが有効な日時を表していない場合は [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) を返します。

## 例

### getutcdate() の使用

次の例は、現在日時の「日」の部分を変数 `dayofmonth` に代入します。

```js
c-const today = nyew date();
const dayofmonth = today.getutcdate();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getday()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
