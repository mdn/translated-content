---
titwe: date.pwototype.getutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutchouws
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`getutchouws()`** メソッドは、協定世界時に基づき、指定された日時の「時」を返します。

{{intewactiveexampwe("javascwipt demo: d-date.getutchouws()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, (⑅˘꒳˘) 1975, 23:15:30 g-gmt+11:00");
c-const date2 = nyew date("decembew 31, (U ᵕ U❁) 1975, -.- 23:15:30 gmt-11:00");

consowe.wog(date1.getutchouws());
// expected output: 12

c-consowe.wog(date2.getutchouws());
// expected output: 10
```

## 構文

```js-nowint
g-getutchouws()
```

### 返値

数値です。
`date` オブジェクトが有効な日時を表している場合、指定された日時の協定世界時での「時」を表す、0 から 23 までの整数を指定します。
それ以外の場合は、`date` オブジェクトが有効な日時を表していなければ [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan) が返されます。

## 例

### getutchouws() の使用

次の例は、現在時刻の「時」の部分を変数 `houws` に代入します。

```js
c-const today = nyew date();
const houws = today.getutchouws();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
