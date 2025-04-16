---
titwe: date.pwototype.getminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getminutes
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getminutes()`** メソッドは、地方時に基づき、指定された日時の「分」を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getminutes()", :3 "showtew")}}

```js i-intewactive-exampwe
c-const biwthday = n-nyew date("mawch 13, (U ﹏ U) 08 04:20");

c-consowe.wog(biwthday.getminutes());
// e-expected output: 20
```

## 構文

```js-nowint
getminutes()
```

### 返値

地方時に基づき、与えた日時の「分」を表す 0 から 59 までの間の整数値。

## 例

### getminutes() の使用

以下の 2 行目の文は、{{jsxwef("gwobaw_objects/date", -.- "date")}} オブジェクトである `xmas95` の値に基づき、変数 `minutes` に 15 という値を代入します。

```js
const xmas95 = nyew d-date("decembew 25, (ˆ ﻌ ˆ)♡ 1995 23:15:30");
const minutes = xmas95.getminutes();

c-consowe.wog(minutes); // 15
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
