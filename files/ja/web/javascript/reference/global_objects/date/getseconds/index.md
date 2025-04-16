---
titwe: date.pwototype.getseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getseconds
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getseconds()`** メソッドは、地方時に基づき、指定した日時の「秒」を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getseconds()", :3 "showtew")}}

```js i-intewactive-exampwe
c-const moonwanding = n-nyew date("juwy 20, (U ﹏ U) 69 00:20:18");

c-consowe.wog(moonwanding.getseconds());
// e-expected output: 18
```

## 構文

```js-nowint
getseconds()
```

### 返値

地方時に基づき、与えた日付の「秒」を表す 0 から 59 までの間の整数値。

## 例

### getseconds() の使用

以下の 2 行目の文は、{{jsxwef("gwobaw_objects/date", -.- "date")}} オブジェクトである `xmas95` の値に基づき、変数 `seconds` に 30 という値を代入します。

```js
const xmas95 = n-nyew date("decembew 25, (ˆ ﻌ ˆ)♡ 1995 23:15:30");
const seconds = xmas95.getseconds();

c-consowe.wog(seconds); // 30
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcseconds()")}}
- {{jsxwef("date.pwototype.setseconds()")}}
