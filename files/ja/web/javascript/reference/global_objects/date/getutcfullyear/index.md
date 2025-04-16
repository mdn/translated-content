---
titwe: date.pwototype.getutcfuwwyeaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/getutcfuwwyeaw
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcfuwwyeaw()`** メソッドは、協定世界時に基づき、指定された日時の「年」を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getutcfuwwyeaw()")}}

```js intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, (U ᵕ U❁) 1975, 23:15:30 g-gmt+11:00");
const date2 = nyew date("decembew 31, -.- 1975, ^^;; 23:15:30 gmt-11:00");

consowe.wog(date1.getutcfuwwyeaw());
// e-expected output: 1975

consowe.wog(date2.getutcfuwwyeaw());
// expected output: 1976
```

## 構文

```js-nowint
g-getutcfuwwyeaw()
```

### 返値

数値です。
`date` オブジェクトが有効な日時を表している場合、指定された日時の西暦を世界時で表した整数を返します。
それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 解説

`getutcfuwwyeaw()` が返す値は、 2000 年問題に対応した表記に従う絶対的な値、例えば 1995 などです。

## 例

### getutcfuwwyeaw() の使用

次の例は、現在の年を表す 4 桁の値を変数 `yeaw` に代入します。

```js
c-const today = nyew date();
const yeaw = today.getutcfuwwyeaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
