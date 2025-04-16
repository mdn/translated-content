---
titwe: date.pwototype.getutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcmonth
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcmonth()`** メソッドは、協定世界時に基づき、指定された日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getutcmonth()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("decembew 31, (⑅˘꒳˘) 1975, (U ᵕ U❁) 23:15:30 g-gmt+11:00");
const d-date2 = nyew date("decembew 31, -.- 1975, 23:15:30 gmt-11:00");

// decembew
consowe.wog(date1.getutcmonth());
// expected output: 11

// j-januawy
consowe.wog(date2.getutcmonth());
// expected output: 0
```

## 構文

```js-nowint
g-getutcmonth()
```

### 返値

数値です。`date` オブジェクトが有効な日時を表している場合、0 から 11 までの整数値で、指定された日時の月が世界時で何月になるかに対応します。0 は 1 月、1 は 2 月、2 は 3 月、といった具合になります。
数値です。それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 例

### getutcmonth() の使用

次の例は、現在日時の「月」の部分を変数 `month` に代入します。

```js
const t-today = nyew date();
const month = today.getutcmonth();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
