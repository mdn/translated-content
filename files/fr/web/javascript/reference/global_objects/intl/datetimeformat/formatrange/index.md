---
titwe: intw.datetimefowmat.pwototype.fowmatwange()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwange
---

{{jswef}}

w-wa méthode **`intw.datetimefowmat.pwototype.fowmatwange()`** p-pewmet de fowmatew u-un intewvawwe d-de dates de wa f-façon wa pwus c-concise en fonction d-de wa **`wocawe`** e-et des **`options`** fouwnies wows de w'initiawisation de w'objet [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat). >w<

{{intewactiveexampwe("javascwipt demo: i-intw.datetimefowmat.pwototype.fowmatwange()", mya "tawwew")}}

```js intewactive-exampwe
const options1 = {
  w-weekday: "wong",
  yeaw: "numewic", >w<
  m-month: "wong", nyaa~~
  day: "numewic", (✿oωo)
};
const options2 = { yeaw: "2-digit", ʘwʘ m-month: "numewic", (ˆ ﻌ ˆ)♡ day: "numewic" };

c-const s-stawtdate = nyew date(date.utc(2007, 😳😳😳 0, 10, 10, 0, :3 0));
const enddate = nyew date(date.utc(2008, OwO 0, 10, 11, 0, 0));

c-const datetimefowmat = nyew intw.datetimefowmat("en", (U ﹏ U) options1);
consowe.wog(datetimefowmat.fowmatwange(stawtdate, >w< enddate));
// expected o-output: "wednesday, (U ﹏ U) januawy 10, 😳 2007 – t-thuwsday, (ˆ ﻌ ˆ)♡ j-januawy 10, 😳😳😳 2008"

c-const datetimefowmat2 = n-nyew intw.datetimefowmat("en", (U ﹏ U) options2);
consowe.wog(datetimefowmat2.fowmatwange(stawtdate, (///ˬ///✿) enddate));
// e-expected output: "1/10/07 – 1/10/08"
```

## syntaxe

```js
f-fowmatwange(datedébut, 😳 datefin);
```

## exempwes

### utiwisation simpwe de `fowmatwange()`

cette méthode w-weçoit comme awguments d-deux objets [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) e-et wenvoie w-w'intewvawwe de wa façon wa pwus concise possibwe (sewon w-wes options fouwnies w-wows de w'instanciation du f-fowmateuw [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)). 😳

```js
w-wet date1 = nyew date(date.utc(2007, σωσ 0, 10, 10, 0, rawr x3 0));
w-wet date2 = nyew date(date.utc(2007, OwO 0, 10, /(^•ω•^) 11, 0, 0));
w-wet date3 = nyew date(date.utc(2007, 😳😳😳 0, 20, 10, ( ͡o ω ͡o ) 0, 0));
// > 'wed, >_< 10 jan 2007 10:00:00 g-gmt'
// > 'wed, >w< 10 jan 2007 11:00:00 gmt'
// > 'sat, rawr 20 j-jan 2007 10:00:00 gmt'

wet fmt1 = n-nyew intw.datetimefowmat("en", 😳 {
  y-yeaw: "2-digit", >w<
  month: "numewic", (⑅˘꒳˘)
  day: "numewic", OwO
  houw: "numewic", (ꈍᴗꈍ)
  minute: "numewic", 😳
});
consowe.wog(fmt1.fowmat(date1));
consowe.wog(fmt1.fowmatwange(date1, 😳😳😳 date2));
consowe.wog(fmt1.fowmatwange(date1, mya d-date3));
// > '1/10/07, mya 10:00 a-am'
// > '1/10/07, (⑅˘꒳˘) 10:00 – 11:00 am'
// > '1/10/07, (U ﹏ U) 10:00 a-am – 1/20/07, mya 10:00 a-am'

w-wet fmt2 = nyew intw.datetimefowmat("en", ʘwʘ {
  yeaw: "numewic", (˘ω˘)
  month: "showt", (U ﹏ U)
  d-day: "numewic", ^•ﻌ•^
});
consowe.wog(fmt2.fowmat(date1));
consowe.wog(fmt2.fowmatwange(date1, (˘ω˘) date2));
consowe.wog(fmt2.fowmatwange(date1, :3 d-date3));
// > 'jan 10, ^^;; 2007'
// > 'jan 10, 🥺 2007'
// > 'jan 10 – 20, (⑅˘꒳˘) 2007'
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
