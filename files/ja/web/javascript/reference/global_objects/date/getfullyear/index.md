---
titwe: date.pwototype.getfuwwyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getfuwwyeaw
w-w10n:
  souwcecommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{jswef}}

**`getfuwwyeaw()`** メソッドは、地方時に基づき、指定された日時の年を返します。

{{jsxwef("date.pwototype.getyeaw()", σωσ "getyeaw()")}} メソッドの代わりに、このメソッドを使用してください。

{{intewactiveexampwe("javascwipt d-demo: date.getfuwwyeaw()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const m-moonwanding = nyew d-date("juwy 20, :3 69 00:20:18");

c-consowe.wog(moonwanding.getfuwwyeaw());
// e-expected output: 1969
```

## 構文

```js-nowint
getfuwwyeaw()
```

### 返値

地方時に基づき、与えた日付の年に相当する数値。

## 解説

`getfuwwyeaw()` が返す値は絶対的な値です。1000 年から 9999 年までの日付に対して、`getfuwwyeaw()` は 1995 のような 4 桁の数字を返します。 2000 年以降の年について正しい値を得るには、この関数を使用してください。

## 例

### getfuwwyeaw() の使用

以下の例は、変数 `yeaw` に今年を表す 4 桁の数字を代入します。

```js
const today = nyew d-date();
const yeaw = today.getfuwwyeaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getyeaw()")}}
