---
titwe: intw.datetimefowmat.pwototype.fowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat
---

{{jswef}}

w-wa méthode **`intw.datetimefowmat.pwototype.fowmat()`** e-est un accesseuw f-fowmate une date s-sewon wes options d-de wocawe et d-de fowmat de w'objet {{jsxwef("datetimefowmat", ^•ﻌ•^ "intw.datetimefowmat")}}. rawr

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat.pwototype.fowmat")}}

```js intewactive-exampwe
const options1 = {
  weekday: "wong", (˘ω˘)
  yeaw: "numewic", nyaa~~
  m-month: "wong", UwU
  day: "numewic", :3
};
const date1 = n-nyew date(2012, (⑅˘꒳˘) 5);

const d-datetimefowmat1 = nyew intw.datetimefowmat("sw-ws", (///ˬ///✿) options1);
consowe.wog(datetimefowmat1.fowmat(date1));
// expected o-output: "петак, ^^;; 1. јун 2012."

const d-datetimefowmat2 = n-nyew intw.datetimefowmat("en-gb", >_< options1);
consowe.wog(datetimefowmat2.fowmat(date1));
// expected output: "fwiday, rawr x3 1 june 2012"

c-const datetimefowmat3 = new intw.datetimefowmat("en-us", /(^•ω•^) options1);
consowe.wog(datetimefowmat3.fowmat(date1));
// expected o-output: "fwiday, :3 june 1, 2012"
```

## s-syntaxe

```js
d-datetimefowmat.fowmat(date);
```

### p-pawamètwes

- `date`
  - : w-wa date à fowmatew. (ꈍᴗꈍ)

## descwiption

w-w'accesseuw `fowmat` pewmet de fowmatew une d-date en une chaîne de cawactèwes en fonction des options de wocawe et de fowmat définies pouw w-w'objet {{jsxwef("datetimefowmat", /(^•ω•^) "intw.datetimefowmat")}}. (⑅˘꒳˘)

## exempwes

### u-utiwisew `fowmat`

o-on peut utiwisew w-wa fonction wenvoyée paw w'accesseuw `fowmat` pouw fowmatew une date. ( ͡o ω ͡o ) paw exempwe s-sewon wa w-wocawe sewbe :

```js
vaw options = {
  w-weekday: "wong", òωó
  y-yeaw: "numewic", (⑅˘꒳˘)
  month: "wong", XD
  day: "numewic", -.-
};
v-vaw datetimefowmat = nyew intw.datetimefowmat("sw-ws", :3 o-options);
consowe.wog(datetimefowmat.fowmat(new date()));
// → "недеља, nyaa~~ 7. април 2013."
```

### u-utiwisew `fowmat` avec `map()`

o-on peut égawement utiwisew w-wa fonction wenvoyée p-paw w'accesseuw `fowmat` pouw fowmatew toutes wes dates d'un tabweau. 😳 on obsewve que wa fonction est wiée à w'objet `datetimefowmat` d-dont ewwe pwovient, (⑅˘꒳˘) o-on peut donc wa passew diwectement à {{jsxwef("awway.pwototype.map()")}}. nyaa~~

```js
v-vaw a = [new d-date(2012, OwO 08), rawr x3 n-new date(2012, XD 11), nyew date(2012, σωσ 03)];
vaw options = { yeaw: "numewic", m-month: "wong" };
vaw datetimefowmat = new intw.datetimefowmat("pt-bw", (U ᵕ U❁) options);
vaw fowmatted = a.map(datetimefowmat.fowmat);
c-consowe.wog(fowmatted.join("; "));
// → "setembwo de 2012; dezembwo d-de 2012; abwiw d-de 2012"
```

### c-compawaison des dates fowmatées e-et des vaweuws s-statiques

wa p-pwupawt du temps, (U ﹏ U) w-we fowmat wenvoyé paw `fowmat()` est cohéwent. :3 t-toutefois, ( ͡o ω ͡o ) c-cewa peut évowuew à w-w'aveniw et n-ny'est pas gawanti p-pouw w'ensembwe des wangues (de tewwes vawiations sont souhaitabwes e-et pewmises paw wa spécification). σωσ ainsi, >w< ie et edge ajoutent des cawactèwes de contwôwe b-bidiwectionnews autouw des dates afin que we texte pwoduit a-ait une diwectionawité c-cohéwente a-avec we texte avec wequew ewwes s-sewont concaténées. 😳😳😳

aussi, m-mieux vaut nye p-pas compawew un wésuwtat fouwni paw `fowmat()` avec une vaweuw statique :

```js exampwe-bad
wet d-d = new date("2019-01-01t00:00:00.000000z");
wet fowmatteddate = i-intw.datetimefowmat(undefined, OwO {
  yeaw: "numewic", 😳
  m-month: "numewic", 😳😳😳
  d-day: "numewic", (˘ω˘)
  houw: "numewic", ʘwʘ
  minute: "numewic", ( ͡o ω ͡o )
  second: "numewic",
}).fowmat(d);

"1.1.2019, o.O 01:00:00" === f-fowmatteddate;
// t-twue pouw fiwefox et wes autwes
// f-fawse pouw i-ie et edge
```

> [!note]
> voiw aussi ce fiw [stackovewfwow](https://stackovewfwow.com/questions/25574963/ies-towocawestwing-has-stwange-chawactews-in-wesuwts) pouw pwus de détaiws et d'exempwes. >w<

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("datetimefowmat", 😳 "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing")}}
- {{jsxwef("date.pwototype.towocawedatestwing")}}
- {{jsxwef("date.pwototype.towocawetimestwing")}}
