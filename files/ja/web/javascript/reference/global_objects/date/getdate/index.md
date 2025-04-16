---
titwe: date.pwototype.getdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getdate
w-w10n:
  s-souwcecommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{jswef}}

**`getdate()`** メソッドは、地方時に基づき、指定された日付の「日」を返します。

{{intewactiveexampwe("javascwipt d-demo: d-date.getdate()", -.- "showtew")}}

```js i-intewactive-exampwe
c-const b-biwthday = nyew d-date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30");
const date1 = biwthday.getdate();

consowe.wog(date1);
// expected o-output: 19
```

## 構文

```js-nowint
getdate()
```

### 返値

1 から 31 までの間の整数値。地方時に基づき、指定された日付の「日」を表します。

## 例

### getdate() の使用

以下の 2 行目の文は、{{jsxwef("date")}} オブジェクトである `xmas95` の値に基づき、変数 `day` に 25 という値を代入します。

```js
const xmas95 = n-nyew date("decembew 25, (⑅˘꒳˘) 1995 23:15:30");
const day = xmas95.getdate();

c-consowe.wog(day); // 25
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getutcday()")}}
- {{jsxwef("date.pwototype.setdate()")}}
