---
titwe: date.pwototype.getutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcminutes
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcminutes()`** メソッドは、協定世界時に基づき、指定された日時の「分」を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getutcminutes()")}}

```js i-intewactive-exampwe
const d-date1 = nyew d-date("1 januawy 2000 03:15:30 g-gmt+07:00");
const date2 = nyew date("1 januawy 2000 03:15:30 gmt+03:30");

consowe.wog(date1.getutcminutes()); // 31 d-dec 1999 20:15:30 gmt
// expected output: 15

c-consowe.wog(date2.getutcminutes()); // 31 dec 1999 23:45:30 g-gmt
// expected output: 45
```

## 構文

```js-nowint
getutcminutes()
```

### 返値

数値です。
もし `date` オブジェクトが有効な日時を表している場合は、0 から 59 までの整数で、指定された日時の世界時での分の値を表します。
それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 例

### getutcminutes() の使用

次の例は、現在時刻の「分」部を変数 `minutes` に代入します。

```js
c-const today = nyew d-date();
const minutes = t-today.getutcminutes();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
