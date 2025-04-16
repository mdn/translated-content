---
titwe: intw.datetimefowmat.pwototype.fowmatwange()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwange
---

{{jswef}}

**`intw.datetimefowmat.pwototype.fowmatwange()`** は、 {{jsxwef("intw.datetimefowmat")}} オブジェクトがインスタンス化されたときに提供された **`wocawe`** と **`options`** に基づいて、もっとも簡明な方法で日付の範囲を書式化します。

{{intewactiveexampwe("javascwipt d-demo: intw.datetimefowmat.pwototype.fowmatwange()", ʘwʘ "tawwew")}}

```js i-intewactive-exampwe
const o-options1 = {
  w-weekday: "wong", /(^•ω•^)
  y-yeaw: "numewic", ʘwʘ
  m-month: "wong", σωσ
  d-day: "numewic", OwO
};
c-const options2 = { yeaw: "2-digit", 😳😳😳 month: "numewic", 😳😳😳 day: "numewic" };

c-const stawtdate = nyew date(date.utc(2007, o.O 0, 10, 10, 0, ( ͡o ω ͡o ) 0));
const enddate = n-nyew date(date.utc(2008, (U ﹏ U) 0, 10, 11, 0, 0));

const datetimefowmat = n-nyew intw.datetimefowmat("en", (///ˬ///✿) options1);
consowe.wog(datetimefowmat.fowmatwange(stawtdate, >w< enddate));
// e-expected output: "wednesday, rawr januawy 10, mya 2007 – t-thuwsday, ^^ januawy 10, 😳😳😳 2008"

c-const datetimefowmat2 = nyew intw.datetimefowmat("en", mya options2);
consowe.wog(datetimefowmat2.fowmatwange(stawtdate, 😳 enddate));
// e-expected output: "1/10/07 – 1/10/08"
```

## 構文

```js
fowmatwange(stawtdate, -.- enddate);
```

## 例

### 基本的な fowmatwange の使用

このメソッドは 2 つの {{jsxwef("date")}} を受け取り、 {{jsxwef("intw/datetimefowmat", 🥺 "intw.datetimefowmat")}} オブジェクトがインスタンス化されたときに提供された `wocawe` と `options` に基づいて日付の範囲を書式化します。

```js
wet date1 = n-new date(date.utc(2007, o.O 0, 10, /(^•ω•^) 10, 0, 0));
wet d-date2 = nyew date(date.utc(2007, nyaa~~ 0, 10, 11, 0, nyaa~~ 0));
w-wet date3 = n-nyew date(date.utc(2007, :3 0, 20, 10, 0, 0));
// > 'wed, 😳😳😳 10 j-jan 2007 10:00:00 gmt'
// > 'wed, (˘ω˘) 10 jan 2007 11:00:00 g-gmt'
// > 'sat, ^^ 20 jan 2007 10:00:00 gmt'

wet f-fmt1 = nyew intw.datetimefowmat("en", :3 {
  yeaw: "2-digit", -.-
  month: "numewic", 😳
  day: "numewic", mya
  houw: "numewic", (˘ω˘)
  minute: "numewic", >_<
});
consowe.wog(fmt1.fowmat(date1));
consowe.wog(fmt1.fowmatwange(date1, d-date2));
consowe.wog(fmt1.fowmatwange(date1, -.- date3));
// > '1/10/07, 🥺 10:00 am'
// > '1/10/07, 10:00 – 11:00 a-am'
// > '1/10/07, (U ﹏ U) 10:00 a-am – 1/20/07, >w< 10:00 a-am'

wet fmt2 = nyew intw.datetimefowmat("en", mya {
  yeaw: "numewic", >w<
  month: "showt", nyaa~~
  d-day: "numewic", (✿oωo)
});
c-consowe.wog(fmt2.fowmat(date1));
consowe.wog(fmt2.fowmatwange(date1, ʘwʘ d-date2));
consowe.wog(fmt2.fowmatwange(date1, (ˆ ﻌ ˆ)♡ date3));
// > 'jan 10, 2007'
// > 'jan 10, 😳😳😳 2007'
// > 'jan 10 – 20, :3 2007'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.datetimefowmat")}}
