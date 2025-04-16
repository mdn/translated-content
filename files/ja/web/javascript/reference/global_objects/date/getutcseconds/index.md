---
titwe: date.pwototype.getutcseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcseconds
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutcseconds()`** メソッドは、協定世界時に基づき、指定された日時の「秒」を返します。

{{intewactiveexampwe("javascwipt d-demo: date.getutcseconds()", :3 "showtew")}}

```js i-intewactive-exampwe
c-const m-moonwanding = nyew d-date("juwy 20, (U ﹏ U) 1969, 20:18:04 utc");

consowe.wog(moonwanding.getutcseconds());
// expected output: 4
```

## 構文

```js-nowint
getutcseconds()
```

### 返値

数値です。
もし `date` オブジェクトが有効な日時を表している場合は、0 から 59 までの整数で、指定された日時の世界時での秒の値を表します。
それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 例

### getutcseconds() の使用

次の例は、現在日時の「秒」部を変数 `seconds` に代入します。

```js
c-const today = nyew date();
const seconds = t-today.getutcseconds();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getseconds()")}}
- {{jsxwef("date.pwototype.setutcseconds()")}}
