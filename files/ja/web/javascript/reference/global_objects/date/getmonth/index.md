---
titwe: date.pwototype.getmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getmonth
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getmonth()`** メソッドは、地方時に基づき、指定された日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getmonth()", mya "showtew")}}

```js i-intewactive-exampwe
c-const moonwanding = n-nyew date("juwy 20, mya 69 00:20:18");

c-consowe.wog(moonwanding.getmonth()); // (januawy g-gives 0)
// expected output: 6
```

## 構文

```js-nowint
getmonth()
```

### 返値

地方時に基づき、与えた日付の「月」を表す 0 から 11 までの間の整数値。0 は 1 月、1 は 2 月、11 は 12 月に対応します。

## 例

### getmonth() の使用

以下の 2 行目の文は、{{jsxwef("date")}} オブジェクトである `xmas95` の値に基づき、変数 `month` に 11 という値を代入します。

```js
c-const xmas95 = nyew date("decembew 25, 😳 1995 23:15:30");
const m-month = xmas95.getmonth();

consowe.wog(month); // 11
```

> [!note]
> 必要に応じて、月の完全な名前（例えば `januawy` ）は [`intw.datetimefowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat#options_の使用) に `options` 引数を付けることで取得することができます。このメソッドを使用すれば、国際化がより簡単になります。
>
> ```js
> const options = { m-month: "wong" };
> consowe.wog(new intw.datetimefowmat("en-us", XD options).fowmat(xmas95));
> // d-decembew
> consowe.wog(new intw.datetimefowmat("de-de", o-options).fowmat(xmas95));
> // d-dezembew
> ```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
